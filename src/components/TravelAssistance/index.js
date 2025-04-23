import {useState} from 'react'
import './index.css'

const TravelAssistance = ({onNext, onPrevious, formData, updateFormData}) => {
  const [showOptions, setShowOptions] = useState(
    formData.travelAssistance !== '',
  )
  const [selectedOption, setSelectedOption] = useState(
    formData.travelAssistance || 'car',
  )

  const handleCheckboxChange = () => {
    const newShow = !showOptions
    setShowOptions(newShow)
    if (!newShow) {
      updateFormData({travelAssistance: ''})
    } else {
      updateFormData({travelAssistance: selectedOption})
    }
  }

  const handleChange = ({target: {value}}) => {
    setSelectedOption(value)
    updateFormData({travelAssistance: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (showOptions) {
      updateFormData({travelAssistance: selectedOption})
    }
    onNext()
  }

  return (
    <div>
      <h1>Travel Assistance</h1>
      <p>Select your travel assistance</p>
      <form onSubmit={handleSubmit}>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="assistance"
            checked={showOptions}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="assistance">Enable Travel Assistance</label>
        </div>

        {showOptions && (
          <select
            className="travel-select"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="car">Car</option>
            <option value="flight">Flight</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
          </select>
        )}

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

export default TravelAssistance
