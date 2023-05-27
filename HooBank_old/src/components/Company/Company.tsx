import React from 'react'
import PropTypes from 'prop-types'

type CompanyProps = {
  imgMaxWidth:number
  imgUrl:string
}

export function Company ({imgMaxWidth,imgUrl}:CompanyProps) {
return (
  <img className={`w-auto h-auto max-w-[${imgMaxWidth}px] SM:max-w-[8em] SM:max-h-[6em]`} src={imgUrl} />

)
}


Company.propTypes = {
  imgMaxWidth:PropTypes.number.isRequired
}