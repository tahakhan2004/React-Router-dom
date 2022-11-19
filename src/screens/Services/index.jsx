import React from 'react'
import { useParams } from 'react-router-dom';
const Service = () => {
const {id} = useParams()  

  return (
     <>
    <h1>Service {id} </h1>
    </>
    
  )
}

export default Service
