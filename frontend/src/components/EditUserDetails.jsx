import React, { useEffect, useSelector, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import UserForm from '../components/sub_components/UserForm'

function EditUserDetails() {
  const [user, setUser] = useState('')
  const params = useParams()
  const API_URL_UPDATE_USER_INFO = `/api/users/update-user-info/${params.userId}`

  //  CHANGE THIS ROUTE TO SINGLE USER AFTER CREATING SINGLE USR ROUTE ON THE BACKEND
  const API_URL_GET_USER_INFO = `/api/users`

  console.log(params.userId)

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const response = await fetch(API_URL_GET_USER_INFO)
        const resData = await response.json()
        console.log(resData)
      }
      fetchData()
    }
  }, [])
  return (
    <>
      <div className="container">
        <UserForm />
      </div>
    </>
  )
}

export default EditUserDetails
