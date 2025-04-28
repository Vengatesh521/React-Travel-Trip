import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Home = () => {
  const history = useHistory()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header className="header" />

      <main>
        <div>
          <h1>
            Travel. Relax. <br />
            Memories.
          </h1>
          <p>
            With travel trip you can experience new adventures and explore the
            best tourist destinations.
          </p>
          <Link to="book-a-new-trip">
            <button type="button" className="b">
              Book a new trip
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc0tfecop/image/upload/v1745848595/86e91bd0119bb212fc241c8f804cd2e93d98df60_rwvrhe.png"
            alt="img5"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
