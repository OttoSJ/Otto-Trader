import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { numberWithCommas } from '../utilities.js/functions'
import { upperCase } from '../utilities.js/functions'
import { getCars } from '../features/cars/carSlice'
import { getAllUsers } from '../features/users/usersSlice'
import { getOneCarById } from '../features/carDetails/carDetailsSlice'
import Spinner from './Spinner'

function CarDetails() {
  const [carDetail, setCarDetail] = useState('')

  const { allUsers } = useSelector((state) => state.allUsers)

  const params = useParams()
  const dispatch = useDispatch()

  const API_URL = `/api/inventory/cardetails/${params.id}`
  console.log(params)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL)
      const resData = await response.json()
      console.log(resData)
      setCarDetail(resData)
    }

    fetchData()

    dispatch(getCars())
    dispatch(getOneCarById(params._id))
    dispatch(getAllUsers())
    window.scrollTo(0, 0)
  }, [params._id, API_URL, dispatch])

  const {
    color,
    image,
    listprice,
    make,
    mileage,
    model,
    type,
    user,
    year,
    engine,
    ac,
    amfm,
    auxport,
    bluetooth,
    comments,
    cruisecontrol,
    drivetype,
    leatherseats,
    satradio,
    sunroof,
    transmission,
  } = carDetail

  if (!allUsers) {
    return <Spinner />
  }

  const ownerInfo = () => {
    const owner = allUsers.filter((ownerDetails) => ownerDetails._id === user)
    if (!owner[0]) {
      return <Spinner />
    } else {
      const { firstname, lastname, email } = owner[0]
      return (
        <div className="container">
          {' '}
          {!owner[0] ? (
            <p> Loading...</p>
          ) : (
            <p className="minus-margin">Seller: {`${firstname} ${lastname}`}</p>
          )}
          {!owner[0] ? (
            <p> Loading...</p>
          ) : (
            <p className="minus-margin">Email: {`${email}`} </p>
          )}
          {!owner[0] ? (
            <p> Loading...</p>
          ) : (
            <p className="minus-margin">Phone: (555) 555-5534 </p>
          )}
        </div>
      )
    }
  }

  const carInfo = () => {
    if (!carDetail) {
      return <Spinner />
    } else
      return (
        <div className="container-centered">
          <div className=" container-centered-start">
            <img
              className="car-details-image mt-3"
              src={carDetail.image}
              alt=""
            />
          </div>
          <section>
            <h1 className="mt-5 headings">
              <div className="mb-2">
                {' '}
                {`${carDetail.year} ${carDetail.make.toUpperCase()} `}{' '}
              </div>
              <div> {`${carDetail.model.toUpperCase()}`} </div>
            </h1>
            <hr />

            <div className="container-flex-row mt-4">
              <div>
                <p>List Price</p>
              </div>
              <div>
                <p>{`$${numberWithCommas(carDetail.listprice.toFixed(2))}`} </p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Mileage</p>
              </div>
              <div>
                <p>{`${numberWithCommas(carDetail.mileage)} `} </p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Engine Type</p>
              </div>
              <div>
                <p>
                  {' '}
                  {carDetail.engine ? upperCase(carDetail.engine) : 'N/A'}{' '}
                </p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Exterior Color</p>
              </div>
              <div>
                <p>{upperCase(carDetail.color)}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Transmission</p>
              </div>
              <div>
                <p>
                  {carDetail.drivetype ? upperCase(carDetail.drivetype) : 'N/A'}{' '}
                </p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Vehicle Type</p>
              </div>
              <div>
                <p>{carDetail.type ? upperCase(carDetail.type) : 'N/A'} </p>
              </div>
            </div>
            <hr />

            <div className="container-flex-row mt-4">
              <div>
                <p>Drive Train</p>
              </div>
              <div>
                <p>
                  {carDetail.transmission
                    ? upperCase(carDetail.transmission)
                    : 'N/A'}{' '}
                </p>
              </div>
            </div>
            <hr />
            <div>
              <h1 className="headings mb-5 mt-5 mr-auto">LUXURY OPTIONS</h1>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>A/C</p>
              </div>
              <div>
                <p>{carDetail.ac ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>AM/FM</p>
              </div>
              <div>
                <p>{carDetail.amfm ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>AUX PORT</p>
              </div>
              <div>
                <p>{carDetail.auxport ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Blue Tooth</p>
              </div>
              <div>
                <p>{carDetail.bluetooth ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Cruise Control</p>
              </div>
              <div>
                <p>{carDetail.cruisecontrol ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Leater Seats</p>
              </div>
              <div>
                <p>{carDetail.leatherseats ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Sat Radio</p>
              </div>
              <div>
                <p>{carDetail.satradio ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-flex-row mt-4">
              <div>
                <p>Sun Roof</p>
              </div>
              <div>
                <p>{carDetail.sunroof ? 'Included' : 'N/A'}</p>
              </div>
            </div>
            <hr />
            <div className="container-centered mt-4 mb-5">
              <p>{carDetail.comments}</p>
            </div>
          </section>
        </div>
      )
  }

  return (
    <>
      <div className="mx-4">
        <div className="headings">
          <h1 className="mb-2"> Car Details </h1>
        </div>
        {ownerInfo()}
        {carInfo()}
      </div>
    </>
  )
}

export default CarDetails
