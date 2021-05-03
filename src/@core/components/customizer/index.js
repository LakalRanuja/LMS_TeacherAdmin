// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { Settings, X } from 'react-feather'
import { CustomInput, FormGroup } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Customizer = props => {
  // ** Props
  const {
    skin,
    setSkin,
    isRtl,
    setIsRtl,
    layout,
    setLayout,
    navbarType,
    setNavbarType,
    footerType,
    setFooterType,
    navbarColor,
    setNavbarColor,
    isHidden,
    setIsHidden,
    contentWidth,
    setContentWidth,
    menuCollapsed,
    setMenuCollapsed,
    transition,
    setTransition
  } = props

  // ** State
  const [openCustomizer, setOpenCustomizer] = useState(false)

  // ** Toggles Customizer
  const handleToggle = e => {
    e.preventDefault()
    setOpenCustomizer(!openCustomizer)
  }

  // ** Render Layout Skin Options
  const renderSkinsRadio = () => {
    const skinsArr = [
      {
        name: 'light',
        label: 'Light',
        checked: skin === 'light'
      },
      {
        name: 'bordered',
        label: 'Bordered',
        checked: skin === 'bordered'
      },
      {
        name: 'dark',
        label: 'Dark',
        checked: skin === 'dark'
      },
      {
        name: 'semi-dark',
        label: 'Semi Dark',
        checked: skin === 'semi-dark'
      }
    ]

    return skinsArr.map((radio, index) => {
      const marginCondition = index !== skinsArr.length - 1

      if (layout === 'HorizontalLayout' && radio.name === 'semi-dark') {
        return null
      }

      return (
        <CustomInput
          key={index}
          type='radio'
          id={radio.name}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setSkin(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // ** Render Navbar Colors Options
  const renderNavbarColors = () => {
    const colorsArr = ['white', 'primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark']

    return colorsArr.map(color => (
      <li
        key={color}
        className={classnames(`color-box bg-${color}`, {
          selected: navbarColor === color,
          border: color === 'white'
        })}
        onClick={() => setNavbarColor(color)}
      ></li>
    ))
  }

  // ** Render Navbar Type Options
  const renderNavbarTypeRadio = () => {
    const navbarTypeArr = [
      {
        name: 'floating',
        label: 'Floating',
        checked: navbarType === 'floating'
      },
      {
        name: 'sticky',
        label: 'Sticky',
        checked: navbarType === 'sticky'
      },
      {
        name: 'static',
        label: 'Static',
        checked: navbarType === 'static'
      },
      {
        name: 'hidden',
        label: 'Hidden',
        checked: navbarType === 'hidden'
      }
    ]

    return navbarTypeArr.map((radio, index) => {
      const marginCondition = index !== navbarTypeArr.length - 1

      if (layout === 'HorizontalLayout' && radio.name === 'hidden') {
        return null
      }

      return (
        <CustomInput
          key={index}
          type='radio'
          id={radio.name}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setNavbarType(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // ** Render Footer Type Options
  const renderFooterTypeRadio = () => {
    const footerTypeArr = [
      {
        name: 'sticky',
        label: 'Sticky',
        checked: footerType === 'sticky'
      },
      {
        name: 'static',
        label: 'Static',
        checked: footerType === 'static'
      },
      {
        name: 'hidden',
        label: 'Hidden',
        checked: footerType === 'hidden'
      }
    ]

    return footerTypeArr.map((radio, index) => {
      const marginCondition = index !== footerTypeArr.length - 1

      return (
        <CustomInput
          key={index}
          type='radio'
          id={`footer-${radio.name}`}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setFooterType(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // **  Router Transition Options
  const transitionOptions = [
    { value: 'fadeIn', label: 'Fade' },
    { value: 'fadeInLeft', label: 'Fade In Left' },
    { value: 'zoomIn', label: 'Zoom In' },
    { value: 'none', label: 'None' }
  ]

  // ** Get Current Transition
  const transitionValue = transitionOptions.find(i => i.value === transition)

  return Customizer
}

export default Customizer
