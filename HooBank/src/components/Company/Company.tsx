import React from 'react'
import PropTypes from 'prop-types'

type CompanyProps = {
  imgMaxWidth:number
  imgUrl:string
}

export function Company ({imgMaxWidth,imgUrl}:CompanyProps) {
return (
  <img className={`w-auto h-auto max-w-[${imgMaxWidth}px]`} src={imgUrl} />

)
}


Company.propTypes = {
  imgMaxWidth:PropTypes.number.isRequired
}