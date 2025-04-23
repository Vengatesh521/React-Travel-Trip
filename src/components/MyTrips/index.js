import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useEffect, useState} from 'react'
import './index.css'

const MyTrips = () => {
  const [trips, setTrips] = useState([])
  const history = useHistory()

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('myTrips')) || []
    setTrips(savedTrips)
  }, [])

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const handleDelete = idToDelete => {
    const updatedTrips = trips.filter(trip => trip.id !== idToDelete)
    setTrips(updatedTrips)
    localStorage.setItem('myTrips', JSON.stringify(updatedTrips))
  }

  return (
    <div className="my-trips-container">
      <header>
        <nav>
          <h1>Travel Trip</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/my-trips">My Trips</Link>
          </div>
          <button type="button" onClick={onClickLogout}>
            Logout
          </button>
        </nav>
      </header>

      {trips.length === 0 ? (
        <div className="no-trips">
          <img
            src="https://res.cloudinary.com/dc0tfecop/image/upload/v1744690388/Frame_1000003896_u5l3jl.png"
            alt="no trips"
          />
          <h2 className="de-h">No upcoming trips.</h2>
          <p className="de-p">
            When you book a trip, you will see your trip details here.
          </p>
          <Link to="/book-a-new-trip">
            <button type="button" className="b">
              Book a new trip
            </button>
          </Link>
        </div>
      ) : (
        <ul className="trip-cards">
          <h1 className="my-trips-heading">My Trips</h1>

          {trips.map(trip => (
            <li key={trip.id} className="trip-card">
              <h1>{trip.name}</h1>
              <h1> {trip.endLocation}</h1>
              <div>
                <p>Date:</p>
                <p>
                  {trip.startDate} to {trip.endDate}
                </p>
              </div>

              <button type="button" onClick={() => handleDelete(trip.id)}>
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyTrips
