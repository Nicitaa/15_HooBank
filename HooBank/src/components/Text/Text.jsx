import './text.css'

export function Text ({title,subtitle,textClass}) {
return (
<div className={`text-container ${textClass}`}>
<div className="title text-title inline-flex">{title}</div>
<div className="subTitle text-subtitle inline-flex">{subtitle}</div>
</div>
)
}