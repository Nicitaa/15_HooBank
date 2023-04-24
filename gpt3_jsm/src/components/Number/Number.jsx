import './number.css'

export function Number ({numberCount,numberTitle}) {
return (
<div className='number-container'>
  <p className="number-count">{numberCount}</p>
  <p className="number-title text-gradient">{numberTitle}</p>
</div>
)
}