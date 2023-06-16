export function SectionsWrapper ({children}:{children:React.ReactNode}) {
return (
  <div className="flex flex-col gap-16 mb-16">
    {children}
  </div>
)
}