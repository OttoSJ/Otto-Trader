import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCars } from '../features/cars/carSlice'
import { numberWithCommas } from '../utilities.js/functions'
import { upperCase } from '../utilities.js/functions'
import Spinner from './Spinner'

function SellerDashboard() {
  const { cars } = useSelector((state) => state.cars)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getCars())
    if (cars) {
      setLoading(false)
    }
  }, [user, navigate, dispatch])

  const sellersInventory = cars.filter((car) => car.user === user._id)

  const handleCarDetails = (e, car) => {
    e.preventDefault()

    navigate(`/cardetails/${car._id}`)
  }

  const handeleEditCarDetails = (e, car) => {
    e.preventDefault()

    navigate(`/editcardetails/${car._id}`)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className="mb-5">Seller's Dashboard</h1>
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
                    <a
                      className=""
                      onClick={(e) => handeleEditCarDetails(e, car)}
                    >
                      Edit Car Details
                    </a>
                  </div>
                </div>
              </main>
            ))
          ) : (
            <h6 className="container-centered">
              You have no vehicles in your inventory
            </h6>
          )}
        </div>
      </div>
    </>
  )
}

export default SellerDashboard
