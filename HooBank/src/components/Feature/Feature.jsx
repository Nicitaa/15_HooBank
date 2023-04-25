import './feature.css'

export function Feature ({svgUrl,featureTitle,featureSubTitle}) {
return (
<div className="feature-container">
 <div className="min-w-[64px] min-h-[64px] bg-sky-500/[.1] rounded-full inline-flex justify-center items-center">
 <svg className='w-8 h-8'>
    <use xlinkHref={svgUrl} />
  </svg>
 </div>
  
  <div className="feature-text">
    <h5 className="title feature-title">{featureTitle}</h5>
    <p className="subTitle feature-subTitle">{featureSubTitle}</p>
  </div>
</div>
)
}