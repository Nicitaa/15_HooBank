import { ButtonDefault, Image, Text } from "../../components";

function openUrl(html) {
  window.open(html, "_blank")
 }


export function ProductPage () {
return (
  <section className="flex justify-around flex-col">


    <div className="flex justify-around flex-row-reverse items-center pb-12">
    <Text textClass={'max-w-[50%]'}
  title={<h1>Get BTC credit</h1>}
  subtitle={<p>2min and here you go</p>}>
    <ButtonDefault buttonDefaultTitle="Get BTC credit" clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
  </Text>
  <Image imageClass={'max-w-[20%]'} imgUrl="./BTC-credit.webp" />
    </div>


    <div className="flex justify-around items-center pb-8">
    <Text textClass={'max-w-[50%]'}
  title={<h1>Trustment</h1>}
  subtitle={<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quos quod fugit voluptatem modi?</p>}>
    <ButtonDefault buttonDefaultTitle="Get BTC credit" clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
  </Text>
  <Image imageClass={'max-w-[20%]'} imgUrl="./handshake.webp" />
    </div>


  </section>
)
}