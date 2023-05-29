interface ContainerProps {
  children:React.ReactNode
  className?:string
}

export function Container ({children,className}:ContainerProps) {
return (
<div className={`
px-4
Tablet:px-8
Laptop:px-12
LaptopL:px-16
4K:px-32      4K:py-12
${className}
`}>
  {children}
</div>
)
}