import { Button } from "../../components";
import { SectionsWrapper, Feature } from "../components";
import { useNavigate } from "react-router-dom";


export function Error404Page () {

const navigate = useNavigate()
  const routeChange = () =>{ 
    let path = `/`
    navigate(path)
  }

return (
<SectionsWrapper>
  
  {/* Our features */}
  <Feature className="mt-8 LaptopL:mt-32" title="404 Not Found" subTitle={'Go back to Home'}
  childrenText={<Button label="Home" onClick={routeChange}/>}>
    <img className="rounded-xl max-w-[50%] mx-auto 
    Tablet:block
    Laptop:w-[15%]
    4K:w-[20%]" src="/wrong.png"/>
  </Feature>

</SectionsWrapper>
)
}