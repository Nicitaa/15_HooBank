import { Button, Container } from "../../components";
import { SectionsWrapper, Feature } from "../components";
import { FaBtc } from 'react-icons/fa'


export function FeaturesPage () {
return (
<SectionsWrapper>
  
  {/* Our features */}
  <Container>
  <div className="mb-2 MobileL:mb-4 Tablet:text-start">
      <h1 className="title text-center text-2xl font-bold mb-2
      MobileL:text-3xl
      LaptopL:text-4xl LaptopL:mb-4
      4K:text-8xl 4K:mb-8">Our features</h1>
      <p className="subTitle text-center
      MobileL:text-lg
      LaptopL:text-3xl
      4K:text-7xl 4K:leading-normal">With a decade of experience, we are a leading provider of top-notch card deals in the market. Our focus is on delivering the best possible deals that cater to the unique needs of our clients. Whether you are looking for credit cards, debit cards, or any other type of payment card, we've got you covered. Our commitment to customer satisfaction has helped us build a solid reputation and position us as a trusted partner for businesses and individuals alike. Join us today and enjoy the benefits of our extensive market knowledge and experience.</p>
    </div>
  </Container>


  {/* BTC credit */}
  <Container>
    <Feature title="BTC credit" subTitle="We afford BTC-credit so you can keep your indenty anonymus and private . We also have a BTC wallet to keep track of your funds. You can use this to send and receive BTC from any exchange. If you have any questions or concerns, email us at support@hoo-bank.com"
    childrenText={<Button label="Get BTC-credit" icon={FaBtc} onClick={() => window.open('https://gitgub.com/Nicitaa')} />}
    children={
    <img className="rounded-xl max-w-[50%] mx-auto 
    Tablet:block
    Laptop:w-[30%]
    4K:w-[40%]" src='/BTC-credit.webp'/>
    }/>
  </Container>

</SectionsWrapper>
)
}