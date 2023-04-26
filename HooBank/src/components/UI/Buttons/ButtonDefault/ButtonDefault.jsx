import { useContext } from 'react'
import './buttonDefault.css'
import PropTypes from 'prop-types'
import { ButtonsContext } from '../../../../context/ModalContext'

export function ButtonDefault ({buttonDefaultTitle,html,children}) {

  const {open} = useContext(ButtonsContext)

 function openUrl(html) {
  window.open(html, "_blank")
 }
 //I need somehow translate into params what I want to do on click
return (
<button onClick={() => openUrl(html)}  className="button-default-container">
  {children}
  {buttonDefaultTitle}
</button>
)
}

ButtonDefault.propTypes = {
  html:PropTypes.string
}