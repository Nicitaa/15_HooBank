import './text.css'

export function Text ({subtitle,title}) {
return (
<div className='text'>
<div className="title inline-flex flex-row gap-1">{title}</div>
<div className="subtitle inline-flex flex-row gap-1">{subtitle}</div>
</div>
)
}