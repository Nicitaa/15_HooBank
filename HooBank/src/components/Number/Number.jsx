import './number.css'

export function Number ({numberCount,numberTitle}) {
return (
<div className='number-container'>
  <p className="number-count">{numberCount}</p>
  <p className="number-title text-gradient XS:text-[1em] SM:text-[1.25em] SD:text-[1.5em]">{numberTitle}</p>
</div>
)
}