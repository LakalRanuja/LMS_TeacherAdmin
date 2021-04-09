// ** React Imports
import { useContext } from 'react'

// ** Third Party Components
import ReactCountryFlag from 'react-country-flag'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

// ** Internationalization Context
import { IntlContext } from '@src/utility/context/Internationalization'

const IntlDropdown = () => {
  // ** Context
  const intlContext = useContext(IntlContext)

  // ** Vars
  const langObj = {
    en: 'English',
    de: 'German',
    fr: 'French',
    pt: 'Portuguese'
  }

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault()
    intlContext.switchLanguage(lang)
  }

  return IntlDropdown
}

export default IntlDropdown
