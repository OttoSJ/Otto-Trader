import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { numberWithCommas } from '../utilities.js/functions'
import { upperCase } from '../utilities.js/functions'
import Spinner from './Spinner'

function SellerDashboard() {
  const { user } = useSelector((state) => state.auth)
  const [sellersInventory, setSellersInventory] = useState('')
  const [sellersName, setSellersName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('user'))

  const API_URL_GET_USERS_INVENTORY = `api/users/inventory/${userInfo._id}`

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL_GET_USERS_INVENTORY)
      const resData = await response.json()
      setSellersInventory(resData.vehicleinventory)
      setSellersName([
        { firstname: resData.firstname },
        { lastname: resData.lastname },
      ])
    }
    fetchData()
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, dispatch, API_URL_GET_USERS_INVENTORY])

  const handleCarDetails = (e, car) => {
    e.preventDefault()
    console.log(car._id)
    navigate(`/cardetails/${car._id}`)
  }

  const handeleEditCarDetails = (e, car) => {
    e.preventDefault()

    navigate(`/editcardetails/${car._id}`)
  }
  console.log(sellersInventory)

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className="mb-5">Seller's Dashboard</h1>
          <h3 className="mb-3">
            Welcome Back{' '}
            {sellersName ? (
              <>
                {sellersName[0].firstname} {sellersName[1].lastname}
              </>
            ) : null}
          </h3>
        </div>

        <div className="main-display-container">
          {sellersInventory.length > 0 ? (
            sellersInventory.map((car) => (
              <main key={car._id} className="main-container mt-3 mb-2 cursor ">
                <img
                  onClick={(e) => handleCarDetails(e, car)}
                  className="main-picture"
                  src={car.image}
                  alt=""
                />
                <div className="sellers-main-message-container">
                  <p className="m-1 mx-3">
                    {car.year} {upperCase(car.make)} <br />{' '}
                    {upperCase(car.model)} <br />{' '}
                    {`$${numberWithCommas(car.listprice)} / ${numberWithCommas(
                      car.mileage
                    )}mi`}
                  </p>
                  <div className="mb-3 mx-3 ">
                    <Button
                      className="btn btn-dark mx-5 mt-2"
                      onClick={(e) => handeleEditCarDetails(e, car)}
                    >
                      Edit Details
                    </Button>
                  </div>
                </div>
              </main>
            ))
          ) : (
            <h6 className="container-centered">
              Loading...
              <Spinner />
            </h6>
          )}
        </div>
      </div>
    </>
  )
}

export default SellerDashboard
