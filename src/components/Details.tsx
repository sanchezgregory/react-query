import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const {id} = useParams();
    

  return (
    <div>Details page: ID: {id}</div>
  )
}

export default Details