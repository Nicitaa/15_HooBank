export function FooterLinks ({FooterLinksTitle,children}) {
return (
<div>
  <h1 className="title text-[18px] font-bold mb-1">{FooterLinksTitle}</h1>
  <ul className="list-none">
  {children}
  </ul>
</div>
)
}