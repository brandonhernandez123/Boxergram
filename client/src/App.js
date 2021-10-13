import './App.css'
import Navigation from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  )
}

export default App
