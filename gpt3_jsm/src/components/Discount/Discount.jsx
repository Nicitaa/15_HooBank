import './discount.css'

export function Discount ({classNameParam}) {
return (
    <div className={`discount ${classNameParam}`}>
    <svg className='percent'>
        <use xlinkHref="./sprite.svg#percent" />
    </svg>
    <p className='discount-text'>
        <span className='text-highlight'>20% </span>
        Discount For{" "}
        <span className='text-highlight'>1 Months </span>
        Account
    </p>
    </div>

)
}