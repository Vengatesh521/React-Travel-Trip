import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'

import './index.css'

const stepsComponents = [
  YourDetails,
  DateSelection,
  Guests,
  TravelAssistance,
  Confirmation,
]

const NewTrip = ({stepsList}) => {
  const history = useHistory()
  const [stepIndex, setStepIndex] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    guests: '',
    travelAssistance: '',
  })

  const updateFormData = data => {
    setFormData(prev => ({
      ...prev,
      ...data,
    }))
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const goToNextStep = () => {
    if (stepIndex < stepsList.length - 1) {
      setStepIndex(prev => prev + 1)
    }
  }

  const goToPreviousStep = () => {
    if (stepIndex > 0) {
      setStepIndex(prev => prev - 1)
    }
  }

  const StepComponent = stepsComponents[stepIndex]

  return (
    <div className="home-container">
      <header>
        <nav>
          <h1>Travel Trip</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/trips">My Trips</Link>
          </div>
          <button onClick={onClickLogout}>Log Out</button>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="details">
            <ul>
              {stepsList.map((step, index) => (
                <li
                  key={step.stepId}
                  className={`${
                    stepIndex === index
                      ? 'selectionindecate'
                      : stepIndex > index
                      ? 'bg-green'
                      : ''
                  }`}
                >
                  <div className="index">
                    {stepIndex > index ? '✔' : index + 1}
                  </div>
                  {step.displayText}
                </li>
              ))}
            </ul>
          </div>

          <div className="form">
            <StepComponent
              onNext={goToNextStep}
              onPrevious={goToPreviousStep}
              formData={formData}
              updateFormData={updateFormData}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewTrip
