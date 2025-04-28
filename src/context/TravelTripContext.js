import React, {createContext} from 'react'

const TravelTripContext = createContext({
  mytripsList: [],
  addtripsList: () => {},
})

export default TravelTripContext
