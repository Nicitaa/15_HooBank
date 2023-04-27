import './text.css'

export function Text ({children,title,subtitle,textClass}) {
return (
<>
<div className={`text-container ${textClass}`}>
<div className="title text-title inline-flex">{title}</div>
<div className="subTitle text-subTitle inline-flex">{subtitle}</div>
{children}
</div>

</>
)
}