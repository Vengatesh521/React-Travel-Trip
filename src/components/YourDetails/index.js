import {useState} from 'react'
import './index.css'

const YourDetails = ({onNext, formData, updateFormData}) => {
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {id, value} = e.target
    updateFormData({[id]: value})

    setErrors({...errors, [id]: ''})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name) newErrors.name = 'Please enter your name'
    if (!formData.startLocation) newErrors.start = 'Please enter start location'
    if (!formData.endLocation) newErrors.end = 'Please enter end location'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      onNext()
    }
  }

  return (
    <div>
      <h1>Your Details</h1>
      <p>Enter your name and location details</p>
      <form onSubmit={handleSubmit}>
        <div className="de">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={errors.name ? 'error-input' : ''}
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <label htmlFor="startLocation">Start Location</label>
          <input
            type="text"
            id="startLocation"
            className={errors.start ? 'error-input' : ''}
            value={formData.startLocation}
            onChange={handleChange}
            placeholder="Enter start location"
          />
          {errors.start && <p className="error-text">{errors.start}</p>}

          <label htmlFor="endLocation">End Location</label>
          <input
            type="text"
            id="endLocation"
            className={errors.end ? 'error-input' : ''}
            value={formData.endLocation}
            onChange={handleChange}
            placeholder="Enter end location"
          />
          {errors.end && <p className="error-text">{errors.end}</p>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default YourDetails
