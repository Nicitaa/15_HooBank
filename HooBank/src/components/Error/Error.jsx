import PropTypes from 'prop-types'

export function Error ({errorTitle,errorSubTitle}) {
return (
<div className="fixed border bottom-5 right-5 bg-[#141414] max-w-[90vh]
 rounded px-4 py-2 flex gap-2">
  <svg className='w-12 h-12 fill-red-600'>
    <use xlinkHref='./sprite.svg#error'></use>
  </svg>
 <div className='text'>
 <p className='title font-bold'>{errorTitle}</p>
  <p className='subTitle'>{errorSubTitle}</p>
 </div>
</div>
)
}

Error.propTypes = {
  errorTitle:PropTypes.string.isRequired
}