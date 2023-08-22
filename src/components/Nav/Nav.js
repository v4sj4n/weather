import './Nav.css'
import weatherLogoIcon from '../../images/icons/logoIcon.svg'
import WeatherDataReceiver from '../../utils/WeatherDataReceiver'
import Main from '../Main/Main'
const body = document.body

export default function Nav() {
  const navContainer = document.createElement('nav')

  // Logo Container
  const logoContainer = document.createElement('div')

  // Logo image
  const logoIcon = new Image()
  logoIcon.src = weatherLogoIcon

  // Logo text
  const logoText = document.createElement('h1')
  logoText.textContent = 'Vas'

  logoContainer.append(logoIcon)
  logoContainer.append(logoText)

  // Input
  const inputSearch = document.createElement('input')
  inputSearch.setAttribute('type', 'text')
  inputSearch.placeholder = 'enter a city'

  // Temperature Switcher

  // H1 container
  const h1Temp = document.createElement('h1')
  if (!localStorage.getItem('temperature')) {
    localStorage.setItem('temperature', 'celsius')
  }

  // Celsius Span
  const spanC = document.createElement('span')
  spanC.textContent = 'C '
  spanC.setAttribute('id', 'celsius')
  if (localStorage.getItem('temperature') === 'celsius') {
    spanC.setAttribute('class', 'temp-preference')
  }

  // Separator Span
  const spanSeperator = document.createElement('span')
  spanSeperator.textContent = '/'

  // Fahrenheit Span
  const spanF = document.createElement('span')
  spanF.textContent = ' F'
  spanF.setAttribute('id', 'fahrenheit')
  if (localStorage.getItem('temperature') === 'fahrenheit') {
    spanF.setAttribute('class', 'temp-preference')
  }

  const preferredTClass = 'temp-preference'

  // Celsius event listener
  spanC.addEventListener('click', () => {
    if (!spanC.classList.contains(preferredTClass)) {
      spanF.classList.remove(preferredTClass)
      spanC.classList.add(preferredTClass)

      localStorage.setItem('temperature', 'celsius')
      const main = document.querySelector('main')

      body.removeChild(main)

      WeatherDataReceiver(Main, localStorage.getItem('currentCity'))
    }
  })
  spanF.addEventListener('click', () => {
    if (!spanF.classList.contains(preferredTClass)) {
      spanC.classList.remove(preferredTClass)
      spanF.classList.add(preferredTClass)
      localStorage.setItem('temperature', 'fahrenheit')
      const main = document.querySelector('main')
      body.removeChild(main)
      WeatherDataReceiver(Main, localStorage.getItem('currentCity'))
    }
  })

  h1Temp.appendChild(spanC)
  h1Temp.appendChild(spanSeperator)
  h1Temp.appendChild(spanF)

  inputSearch.addEventListener('keyup', function (event) {
    event.preventDefault()
    if (event.key === 'Enter') {
      const main = document.querySelector('main')

      if (main) {
        body.removeChild(main)
      }
      localStorage.setItem('currentCity', inputSearch.value)
      WeatherDataReceiver(Main, inputSearch.value)
      inputSearch.value = ''
    }
  })

  if (window.innerWidth <= 800) {
    navContainer.appendChild(logoContainer)
    navContainer.appendChild(h1Temp)
    navContainer.appendChild(inputSearch)
  } else {
    navContainer.appendChild(logoContainer)
    navContainer.appendChild(inputSearch)
    navContainer.appendChild(h1Temp)
  }

  return navContainer
}
