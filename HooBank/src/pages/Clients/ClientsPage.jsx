import { ButtonDefault, Image, Text } from "../../components";

export function ClientsPage () {
return (
<section className="flex justify-around flex-col">


<div className="flex justify-around items-center pb-24 pt-8">
<Text textClass={'max-w-[50%]'}
title={<h1>Funny page!</h1>}
subtitle={<p>Our clients - Elon Musk</p>}>
<ButtonDefault buttonDefaultTitle="I'm hired?" clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
</Text>
<Image imageClass={'max-w-[50%] rounded'} imgUrl="./Elon-Musk.webp" />
</div>


<div className="flex justify-around flex-row-reverse items-center pb-8">
<Text textClass={'max-w-[50%]'}
title={<h1>Apple</h1>}
subtitle={<p>Don't be ideal</p>}>
<ButtonDefault buttonDefaultTitle="Look at this image" buttonClassName="w-[100%]" clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
</Text>
<Image imageClass={'max-w-[20%]'} imgUrl="./apple-gradient.webp" />
</div>


</section>
)
}