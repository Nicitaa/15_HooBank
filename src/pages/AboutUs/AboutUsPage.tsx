import { AiFillGithub } from "react-icons/ai";
import { Button, Container } from "../../components";
import { Feature, SectionsWrapper } from "../components";

export function AboutUsPage() {
  return (
    <SectionsWrapper>

      {/* 10 years on the market */}
      <Feature title="We 10 years on the market" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
        childrenText={<Button label="My github" onClick={() => window.open('https://github.com/Nicitaa')} icon={AiFillGithub} />}>
        <img className="rounded-xl max-w-[50%] mx-auto Tablet:block" src='/stocks-up.jpg' />
      </Feature>

      {/* About us */}
      <Container>
        <div className="mb-2 MobileL:mb-4 Tablet:text-start">
          <h1 className="title text-center text-2xl font-bold mb-2
  MobileL:text-3xl
  LaptopL:text-4xl LaptopL:mb-4
  4K:text-8xl 4K:mb-8">About Us</h1>
          <p className="subTitle text-center
  MobileL:text-lg
  LaptopL:text-3xl
  4K:text-7xl 4K:leading-normal">With a decade of experience, we are a leading provider of top-notch card deals in the market. Our focus is on delivering the best possible deals that cater to the unique needs of our clients. Whether you are looking for credit cards, debit cards, or any other type of payment card, we've got you covered. Our commitment to customer satisfaction has helped us build a solid reputation and position us as a trusted partner for businesses and individuals alike. Join us today and enjoy the benefits of our extensive market knowledge and experience.</p>
        </div>

      </Container>
    </SectionsWrapper>
  )
}