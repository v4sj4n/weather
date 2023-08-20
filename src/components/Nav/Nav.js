import './Nav.css'
import weatherLogoIcon from '../../images/icons/logoIcon.svg'

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

  // Celsius Span
  const spanC = document.createElement('span')
  spanC.textContent = 'C '
  spanC.setAttribute('id', 'celsius')
  spanC.setAttribute('class', 'temp-preference')

  // Separator Span
  const spanSeperator = document.createElement('span')
  spanSeperator.textContent = '/'

  // Fahrenheit Span
  const spanF = document.createElement('span')
  spanF.textContent = ' F'
  spanF.setAttribute('id', 'fahrenheit')

  h1Temp.appendChild(spanC)
  h1Temp.appendChild(spanSeperator)
  h1Temp.appendChild(spanF)

  navContainer.appendChild(logoContainer)
  navContainer.appendChild(inputSearch)
  navContainer.appendChild(h1Temp)

  return navContainer
}
