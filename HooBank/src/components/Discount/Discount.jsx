import './discount.css'

export function Discount ({discountClass,svgUrl,discountTitle}) {
return (
    <div className={`discount-container ${discountClass}`}>
    <svg className='percent'>
        <use xlinkHref={svgUrl} />
    </svg>
    <div className='discount-title'>
        {discountTitle}
    </div>
    </div>

)
}