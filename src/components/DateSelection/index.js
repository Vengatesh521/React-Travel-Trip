import {useState} from 'react'
import './index.css'

const DateSelection = ({onNext, onPrevious, formData, updateFormData}) => {
  const [startDate, setStartDate] = useState(formData.startDate || '')
  const [endDate, setEndDate] = useState(formData.endDate || '')
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = {}

    if (!startDate) newErrors.startDate = 'Please select a start date'
    if (!endDate) newErrors.endDate = 'Please select an end date'
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      newErrors.endDate = 'The end date cannot be less than the start date'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      updateFormData({startDate, endDate}) // ✅ Save to parent state
      onNext()
    }
  }

  return (
    <div>
      <h1>Date Selection</h1>
      <p>Pick your preferred travel dates</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={e => {
            setStartDate(e.target.value)
            setErrors(prev => ({...prev, startDate: ''}))
          }}
          className={errors.startDate ? 'error-input' : ''}
        />
        {errors.startDate && <p className="error-text">{errors.startDate}</p>}

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={e => {
            setEndDate(e.target.value)
            setErrors(prev => ({...prev, endDate: ''}))
          }}
          className={errors.endDate ? 'error-input' : ''}
        />
        {errors.endDate && <p className="error-text">{errors.endDate}</p>}

        <div className="button-group">
          <button type="button" onClick={onPrevious}>
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default DateSelection
