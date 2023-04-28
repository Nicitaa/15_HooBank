import { ButtonDefault, Feature, Text } from "../../components";
import { Features } from "../Home";

export function FeaturesPage () {
return (
  <Features>
    <Text title={<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nihil!</h1>}
    subtitle={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maxime eligendi exercitationem vero quas, similique nobis amet in provident laborum assumenda hic cum voluptates!</p>}>
      <ButtonDefault buttonDefaultTitle="lorem ipsum"/>
    </Text>
    <Feature featureTitle={`Get started with new universal card from us`} featureSubTitle={`lorem ipusm card dolor sit.`}
    svgUrl={`./sprite.svg#card`}/>
  </Features>
)
}