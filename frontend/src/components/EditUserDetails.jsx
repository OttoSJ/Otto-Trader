import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import UserForm from '../components/sub_components/UserForm'
import { FaUser } from 'react-icons/fa'
// import { requestOptions } from '../utilities.js/variables'

function EditUserDetails() {
  const [userInformation, setUserInformation] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  //   const API_URL_UPDATE_USER_INFO = `/api/users/update-user-info/${params.userId}`

  const API_URL_DELETE_USER_INFO = `/api/users/update-user-info/${params.userId}`

  const API_URL_GET_USER_INFO = `/api/users/user-info/${params.userId}`
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const token = userInfo.token
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const handleDelete = () => {
    console.log({ Deleted: userInformation._id })
    const fetchData = async () => {
      const response = await fetch(API_URL_DELETE_USER_INFO, {
        method: 'DELETE',
      })
    }
    fetchData()

    // delete all user vehicles
    // navigate to home page
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('/homepage')
    }
    const fetchData = async () => {
      const response = await fetch(API_URL_GET_USER_INFO, requestOptions)
      const resData = await response.json()
      setUserInformation(resData)
    }
    fetchData()
  }, [API_URL_GET_USER_INFO, navigate])

  return (
    <>
      <h1 className="mt-5 headings">
        <FaUser className="mb-3 mx-2" /> Hello, {userInformation.firstname}{' '}
        {userInformation.lastname}
        <p className="p-5">Edit Your Information Below</p>
      </h1>

      <Form className="container">
        <UserForm userInformation={userInformation} />
        <Button
          onClick={() => handleDelete()}
          className="btn btn-danger col-5 mt-5 m-3"
        >
          Delete
        </Button>
        <Button type="submit" className="btn btn-dark col-5 mt-5 m-3">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default EditUserDetails
