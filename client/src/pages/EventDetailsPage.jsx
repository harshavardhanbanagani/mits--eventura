import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailsPage() {
  const { id } = useParams()
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <p>Details for event ID: {id}</p>
    </div>
  )
}

export default EventDetailsPage