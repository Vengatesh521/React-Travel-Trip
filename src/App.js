import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import BookNewTrip from './components/BookNewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import TravelTripContextValue from './context/TravelTripContext'

// Note: Use the lists in your code to pass the test cases

class App extends Component {
  state = {
    myTripsList: [],
  }

  addTripList = tripsDetails => {
    this.setState(prevState => ({
      myTripsList: [...prevState.myTripsList, tripsDetails],
    }))
  }

  render() {
    const {myTripsList} = this.state
    return (
      <TravelTripContextValue.Provider
        value={{
          myTripsList,
          addTripList: this.addTripList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookNewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route component={NotFound} />
        </Switch>
      </TravelTripContextValue.Provider>
    )
  }
}

export default App
