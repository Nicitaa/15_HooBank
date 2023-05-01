import './text.css'

export function Text ({children,title,subtitle,textClass}) {
return (
<>
<div className={`text-container ${textClass} SD:w-min-full SD:text-center`}>
<div className="title text-title inline-flex XS:text-center XS:text-[2em] SM:text-center SM:text-[2.75em]
SD:text-[3em] SD:justify-center FHD:text-[4.8rem]">{title}</div>
<div className="subTitle text-subTitle inline-flex XS:text-center XS:pb-0 XS:text-[0.8em] SM:pb-0 SM:text-center
SD:text-[1em] FHD:text-[2rem]">{subtitle}</div>
{children}
</div>

</>
)
}