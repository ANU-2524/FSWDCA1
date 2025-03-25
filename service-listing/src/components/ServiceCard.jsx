import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
    <div >
      <h1>Service Title : {props.title}</h1>
      </div>
      <h3>Brief Description : {props.description}</h3>
      </>
  )
}

export default ServiceCard
