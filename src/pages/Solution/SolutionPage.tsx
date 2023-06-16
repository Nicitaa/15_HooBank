import { Button, Container } from "../../components";
import { Feature, SectionsWrapper } from "../components";

export function SolutionPage () {
return (
<SectionsWrapper>
<Container>
    <Feature title="Apple - don't be ideal" subTitle="This site not ideas as this image"
    children={
    <img className="rounded-xl max-w-[50%] mx-auto 
    Tablet:block
    Laptop:w-[30%]
    4K:w-[40%]" src='/apple-gradient.webp'/>
    }/>
  </Container>
</SectionsWrapper>
)
}