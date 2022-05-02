import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Registration from './components/Registration'
import HomePage from './components/HomePage'
import SellerDashboard from './components/SellerDashboard'
import CarRegistration from './components/CarRegistration'
import CarDetails from './components/CarDetails'
import EditCarDetails from './components/EditCarDetails'
import { useDispatch } from 'react-redux'
import { getCars } from '../../frontend/src/features/cars/carSlice'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getAllUsers } from './features/users/usersSlice'

function App() {
  // const [search, setSearch] = useState('')
  // const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  const API_URL = `/api/inventory/`

  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(API_URL)
        const resData = await response.json()

        if (resData.length > 0) {
          setData(resData)
          dispatch(getCars())
        }
      }
      fetchData()
      dispatch(getAllUsers())
    },
    [API_URL, dispatch],
    dispatch
  )

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/carregistration" element={<CarRegistration />} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/editcardetails/:id" element={<EditCarDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
