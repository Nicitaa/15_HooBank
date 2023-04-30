import './discount.css'
import styles from '../../constant/styles'

export function Discount ({discountClass,svgUrl,discountTitle}) {
return (
    <div className={`discount-container ${styles.flexCenter} ${discountClass}`}>
    <svg className='percent XS:max-w-[3em] XS:max-h-[3em] SM:max-w-[3em] SM:max-h-[3em] SD:max-w-[3em] SD:max-h-[3em]'>
        <use xlinkHref={svgUrl} />
    </svg>
    <div className='discount-title XS:text-[1em] SM:text-[1em] SD:text-[1.5em]'>
        {discountTitle}
    </div>
    </div>

)
}