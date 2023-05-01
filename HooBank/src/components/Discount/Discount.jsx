import './discount.css'
import styles from '../../constant/styles'

export function Discount ({discountClass,svgUrl,discountTitle}) {
return (
    <div className={`discount-container ${styles.flexCenter} ${discountClass} HD:ms-0 FHD:px-8`}>
    <svg className='percent XS:max-w-[3em] XS:max-h-[3em] SM:max-w-[3em] SM:max-h-[3em] 
    SD:max-w-[3em] SD:max-h-[3em] HD:max-w-[4em] HD:max-h-[4em] FHD:max-h-[10vh] FHD:max-w-[10vh]'>
        <use xlinkHref={svgUrl} />
    </svg>
    <div className='discount-title XS:text-[1em] SM:text-[1em] SD:text-[1.5em] FHD:text-[2.4rem]'>
        {discountTitle}
    </div>
    </div>

)
}