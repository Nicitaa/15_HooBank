export function CTA ({children,CTAClassName}) {
return (
<section className={`py-4 pb-28 flex gap-3 ${CTAClassName}`}>
  {children}
</section>
)
}