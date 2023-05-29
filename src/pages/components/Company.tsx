interface CompanyProps {
  imgSrc:string
  imgAlt?:string
}

export function Company ({imgSrc,imgAlt}:CompanyProps) {
return (
<img className="max-w-[45%] object-cover 
Tablet:max-w-[30%]
LaptopL:max-w-[20%]
4K:w-full" src={imgSrc} alt={imgAlt ? imgAlt : 'company'} />
)
}