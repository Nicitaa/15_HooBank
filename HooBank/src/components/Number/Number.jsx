import './number.css'

export function Number ({numberCount,numberTitle}) {
return (
<div className='number-container'>
  <p className="number-count FHD:text-[4.5rem]">{numberCount}</p>
  <p className="number-title text-gradient XS:text-[1em] SM:text-[1.25em] SD:text-[1.5em] FHD:text-[2.4rem]">{numberTitle}</p>
</div>
)
}