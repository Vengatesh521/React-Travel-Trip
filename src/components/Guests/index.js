import {useState} from 'react'
import './index.css'

const Guests = ({onNext, onPrevious, formData, updateFormData}) => {
  const [adults, setAdults] = useState(formData.adults || 0)
  const [children, setChildren] = useState(formData.children || 0)
  const [infants, setInfants] = useState(formData.infants || 0)

  const handleSubmit = e => {
    e.preventDefault()
    updateFormData({
      guests: `${adults} Adults, ${children} Children, ${infants} Infants`,
      adults,
      children,
      infants,
    })
    onNext()
  }

  const increment = type => {
    if (type === 'adults') setAdults(adults + 1)
    if (type === 'children') setChildren(children + 1)
    if (type === 'infants') setInfants(infants + 1)
  }

  const decrement = type => {
    if (type === 'adults' && adults > 0) setAdults(adults - 1)
    if (type === 'children' && children > 0) setChildren(children - 1)
    if (type === 'infants' && infants > 0) setInfants(infants - 1)
  }

  return (
    <div>
      <h1>Guests</h1>
      <p>Select your guests</p>
      <form onSubmit={handleSubmit}>
        <div className="de-container">
          <div className="guest-section">
            <div className="details-name">
              <h2>Adults</h2>
              <label>Age 13 or above</label>
            </div>
            <div className="counter">
              <button type="button" onClick={() => decrement('adults')}>
                -
              </button>
              <span>{adults}</span>
              <button type="button" onClick={() => increment('adults')}>
                +
              </button>
            </div>
          </div>
          <hr />
          <div className="guest-section">
            <div className="details-name">
              <h2>Children</h2>
              <label>Age 2–12</label>
            </div>
            <div className="counter">
              <button type="button" onClick={() => decrement('children')}>
                -
              </button>
              <span>{children}</span>
              <button type="button" onClick={() => increment('children')}>
                +
              </button>
            </div>
          </div>
          <hr />
          <div className="guest-section">
            <div className="details-name">
              <h2>Infants</h2>
              <label>Under 2</label>
            </div>
            <div className="counter">
              <button type="button" onClick={() => decrement('infants')}>
                -
              </button>
              <span>{infants}</span>
              <button type="button" onClick={() => increment('infants')}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <button type="button" onClick={onPrevious}>
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default Guests
