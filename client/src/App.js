import './App.css'
import Navigation from './components/Navbar'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/auth'
import Feed from './pages/Feed'
import Event from './pages/Events'
import TopNav from './components/TopNav'
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'
function App() {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    console.log('session', session)
    setUser(session)
    console.log(user)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <TopNav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <Navigation setUser={setUser} user={user} authenticated={authenticated} />

      <Switch>
        <Route
          exact
          path="/login"
          component={(props) => (
            <Login
              {...props}
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          )}
        />
        <Route
          exact
          path="/feed"
          component={(props) => (
            <Feed
              {...props}
              user={user}
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              authenticated={authenticated}
            />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/events"
          component={(props) => (
            <Event
              {...props}
              user={user}
              authenticated={authenticated}
              setUser={setUser}
              checkToken={checkToken}
              toggleAuthenticated={toggleAuthenticated}
            />
          )}
        />
        <Route exact path="/" component={Home} />
        {authenticated && user ? (
          <Route
            exact
            path="/myprofile"
            component={(props) => (
              <MyProfile
                {...props}
                user={user}
                authenticated={authenticated}
                setUser={setUser}
                checkToken={checkToken}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
        ) : null}
      </Switch>
    </div>
  )
}

export default withRouter(App)
