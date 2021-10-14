import './App.css'
import Navigation from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/auth'
import Feed from './pages/Feed'
import Event from './pages/Events'
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
    setUser(session)
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
      <Navigation />

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
          component={(props) => <Feed {...props} user={user} />}
        />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/events"
          component={(props) => <Event {...props} user={user} />}
        />
      </Switch>
    </div>
  )
}

export default App
