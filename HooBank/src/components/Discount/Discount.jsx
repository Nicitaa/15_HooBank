import './discount.css'
import styles from '../../constant/styles'

export function Discount ({discountClass,svgUrl,discountTitle}) {
return (
    <div className={`discount-container ${styles.flexCenter} ${discountClass}`}>
    <svg className='percent SD:max-w-[3em] SD:max-h-[3em]'>
        <use xlinkHref={svgUrl} />
    </svg>
    <div className='discount-title SD:text-[1em]'>
        {discountTitle}
    </div>
    </div>

)
}