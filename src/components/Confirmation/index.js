import {useState} from 'react'
import './index.css'

const Confirmation = ({formData, onPrevious}) => {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  const handleNewTrip = () => {
    window.location.reload() // or call a function to reset the flow
  }

  if (isConfirmed) {
    return (
      <div className="cont">
        <div className="index1">{'✔'}</div>
        <h1>Awesome!</h1>
        <p>Your booking has been confirmed.</p>
        <button onClick={handleNewTrip}>Book a New Trip</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Confirmation</h1>
      <p>Confirm your details</p>
      <div>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Start Location:</strong> {formData.startLocation}
        </p>
        <p>
          <strong>End Location:</strong> {formData.endLocation}
        </p>
        <p>
          <strong>Start Date:</strong> {formData.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {formData.endDate}
        </p>
        <p>
          <strong>Guests:</strong>{' '}
          {Number(formData.adults || 0) +
            Number(formData.children || 0) +
            Number(formData.infants || 0)}
        </p>
        <p>
          <strong>Travel Assistance:</strong>{' '}
          {formData.travelAssistance ? formData.travelAssistance : 'None'}
        </p>
      </div>
      <button onClick={onPrevious}>Back</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  )
}

export default Confirmation
