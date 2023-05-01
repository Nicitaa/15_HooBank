export function FooterLinks ({FooterLinksTitle,children}) {
return (
<div className="XS:text-center SM:text-center SD:text-center">
  <h1 className="title text-[18px] font-bold mb-1 FHD:text-[3rem]">{FooterLinksTitle}</h1>
  <ul className="list-none">
  {children}
  </ul>
</div>
)
}