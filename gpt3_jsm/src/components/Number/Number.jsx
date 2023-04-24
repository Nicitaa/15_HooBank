import './number.css'

export function Number ({number,numberTitle}) {
return (
<div className='flex min-w-[31%] items-center'>
  <p className="number">{number}</p>
  <p className="number-title text-gradient">{numberTitle}</p>
</div>
)
}