import { Container } from '../../../components'
import { Text } from '..'


interface FeatureProps {
  className?:string
  children?:React.ReactNode
  childrenText?:React.ReactNode
  title:string
  subTitle?:string
}

export function Feature ({className,children,childrenText,title,subTitle}:FeatureProps) {
return (
<Container className={`flex flex-col items-center gap-4
Tablet:flex-row Tablet:gap-6
Laptop:gap-8
LaptopL:gap-10
4K:gap-16 ${className}`}>
  <div className="flex Tablet:max-w-[50%] ">
    <Text title={title} 
      subTitle={subTitle}>
      {childrenText}
    </Text>
  </div>
  {children}
</Container>

)

}