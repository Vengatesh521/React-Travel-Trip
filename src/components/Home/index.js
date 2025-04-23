import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Home = () => {
  const history = useHistory()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="home-container">
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
            src="https://s3-alpha-sig.figma.com/img/86e9/1bd0/119bb212fc241c8f804cd2e93d98df60?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDM39z~uY6v9hryMTsG0jiuKfj1rUSMLFQCNO~SmoJyLjGlkXlz2XtT8kf0-1fMyYQ1cxSd-b8N1Wy4H0OZcQBusBVWKfZbobge0bVc~k3WvjkyZm5Ws5d22~X8TKzYCjJ8jDXOOxT5GCWnz99YyekcqKE4WSkAxw965zJv3Yn1a9Sf06OuafxpgHmfPUwFc4z0Sg4~w1iEYo-jetP93R5JVTxAdVO-C21l47cdAGyv6xJcR9ykIrC3WyDGM67QcudBwbogPbrFq4U3dfoqrPpUBjkkgS0DQZ2BpDy1khXP5qqam0N2nwbWdhWDSqW2XjL7Q8XstiK3D~4PaP8tjSg__"
            alt="img5"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
