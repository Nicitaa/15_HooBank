import { Container } from ".."

interface ModalProps {
  label:string
  children:React.ReactNode
}

export function Modal ({label,children}:ModalProps) {
return (
<modal className={`fixed top-0 bottom-0 left-0 right-0 bg-black/[0.4]`}>
  <form className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
  w-3/4 h-3/4
  rounded-xl linear-bg-gray flex flex-col items-center"
  onSubmit={e => e.preventDefault()}>
      <Container className="p-4 w-full text-center border-b-[1px] border-solid border-[#3F3E45]">
        <h1 className="text-xl">{label}</h1>
      </Container>
      <Container className="px-4 w-full">
       {children}
      </Container>
  </form>
</modal>
)
}