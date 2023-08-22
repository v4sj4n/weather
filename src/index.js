import './style.css'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import WeatherDataReceiver from './utils/WeatherDataReceiver'

const body = document.body

body.appendChild(Nav())

WeatherDataReceiver(Main, localStorage.getItem('currentCity'))
