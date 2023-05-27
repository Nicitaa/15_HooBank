import './feature.css'

export function Feature ({svgUrl,featureTitle,featureSubTitle}) {
return (
<div className="feature-container">
 <div className="min-w-[64px] min-h-[64px] bg-sky-500/[.1] rounded-full inline-flex justify-center items-center
 FHD:min-w-[10vh] FHD:min-h-[10vh]">
 <svg className='w-8 h-8 FHD:w-[3.3rem] FHD:h-[3.3rem]'>
    <use xlinkHref={svgUrl} />
  </svg>
 </div>
  
  <div className="feature-text">
    <h5 className="title feature-title FHD:text-[2rem]">{featureTitle}</h5>
    <p className="subTitle feature-subTitle FHD:text-[1.5rem]">{featureSubTitle}</p>
  </div>
</div>
)
}