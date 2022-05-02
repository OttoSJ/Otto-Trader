import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagintation'
import CarCard from './CarCard'
import { getOneCarById } from '../features/carDetails/carDetailsSlice'

function HomePage({ data }) {
  // const [carDataLength, setCarDataLength] = useState(9)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage] = useState(6)

  const indexOfLastCar = currentPage * carsPerPage
  const indexIfFirstCar = indexOfLastCar - carsPerPage

  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(query)

  const handleCarDetails = (e, car) => {
    e.preventDefault()
    dispatch(getOneCarById(car._id))

    const fetchData = async () => {
      const API_URL = `/api/inventory/cardetails/${car._id}`

      const response = await fetch(API_URL)
      const resData = await response.json()

      console.log(resData)
      await navigate(`/cardetails/${resData._id}`)
    }

    fetchData()
  }

  const handleSearch = (e, search) => {
    e.preventDefault()
    setQuery(search)
  }

  const paginate = (number) => {
    setCurrentPage(number)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className=" styled-header"> Otto Trader</h1>
          <h4>Find your drive!</h4>
        </div>
        <section>
          <form className=" ">
            <div className="container-centered">
              <input
                className="search-bar cursor"
                type="text"
                placeholder="   Search by Make or Model"
                onChange={(e) => handleSearch(e, e.target.value)}
              />
            </div>
          </form>
        </section>
        <div className="main-display-container">
          {data
            ? data
                .filter((filteredCars) => {
                  if (query === '') {
                    console.log(filteredCars.make)
                    return data
                  } else if (
                    filteredCars.make
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  ) {
                    return filteredCars
                  } else if (
                    filteredCars.model
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  ) {
                    return filteredCars
                  }
                })
                .slice(indexIfFirstCar, indexOfLastCar)
                .map((filteredCars) => (
                  <CarCard
                    key={filteredCars._id}
                    filteredCars={filteredCars}
                    handleCarDetails={handleCarDetails}
                  />
                ))
            : null}
        </div>
        <Pagination
          paginate={paginate}
          totalCars={data.length}
          carsPerPage={carsPerPage}
        />
      </div>
    </>
  )
}

export default HomePage
