import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import './index.css'

const Confirmation = ({formData, onPrevious}) => {
  const [isConfirmed, setLocalIsConfirmed] = useState(false)

  const handleConfirm = () => {
    const existingTrips = JSON.parse(localStorage.getItem('myTrips')) || []
    const updatedTrips = [...existingTrips, {...formData, id: uuidv4()}]
    localStorage.setItem('myTrips', JSON.stringify(updatedTrips))
    setLocalIsConfirmed(true)
  }

  const handleCancel = () => {
    onPrevious()
  }

  const handleNewTrip = () => {
    window.location.reload()
  }

  if (isConfirmed) {
    return (
      <div className="cont">
        <div className="index1">✔</div>
        <h1>Awesome</h1>
        <p>Your booking has been confirmed</p>
        <button type="button" onClick={handleNewTrip}>
          Book a New Trip
        </button>
      </div>
    )
  }

  return (
    <main className="cont">
      <h1>Confirmation</h1>
      <p>Please confirm your details below:</p>
      <p>Name: {formData.name}</p>
      <p>Start Location: {formData.startLocation}</p>
      <p>End Location: {formData.endLocation}</p>
      <p>Start Date: {formData.startDate}</p>
      <p>End Date: {formData.endDate}</p>
      <p>
        Guests:{' '}
        {Number(formData.adults || 0) +
          Number(formData.children || 0) +
          Number(formData.infants || 0)}
      </p>
      <p>Travel Assistance: {formData.travelAssistance || 'None'}</p>
      <div className="button-group">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </main>
  )
}

export default Confirmation
