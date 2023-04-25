import PropTypes from 'prop-types'

export function Error ({errorTitle}) {
return (
<div className="fixed w-[15vh] h-[5vh] bg-red-700 rounded px-2 py-1">
  <p>{errorTitle}</p>
</div>
)
}

Error.propTypes = {
  errorTitle:PropTypes.string.isRequired
}