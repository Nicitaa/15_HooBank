import { useSwipeable } from "react-swipeable"
import { Container } from ".."
import { IoMdClose } from "react-icons/io"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useMessage from "../../hooks/useMessage"
import { Message } from "./Message"

interface ModalProps {
  label: string
  children: React.ReactNode
  isOpen?: boolean
  onClose: () => void
}

export function ModalContainer({ label, children, onClose, isOpen }: ModalProps) {

  const message = useMessage()

  const modalRef = useRef(null);
  const modalBgRef = useRef(null);

  const [showModal, setShowModal] = useState(isOpen)


  /* onOpen - show modal - disable scroll */
  useEffect(() => {
    setShowModal(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen])


  /* onClose - close modal - show scrollbar */
  function closeModal() {
    onClose()
    document.body.removeAttribute('style');
  }



  /* for e.stopPropagation when mousedown on modal and mouseup on modalBg */
  const modalBgHandler = useSwipeable({
    onTouchStartOrOnMouseDown: () => {
      closeModal()
    },
    trackMouse: true
  })

  const modalHandler = useSwipeable({
    onTouchStartOrOnMouseDown: (e) => {
      e.event.stopPropagation()
    },
    trackMouse: true
  })

  return (
    <AnimatePresence>
      {showModal &&
        <motion.div className={`fixed top-0 bottom-0 left-0 right-0
      flex justify-center items-center`}
          {...modalBgHandler}
          initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
          animate={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          transition={{ duration: 0.5 }}
          ref={modalBgRef}>

          <motion.form className="relative my-0 mx-auto
      modal-width h-fit
      rounded-xl linear-bg-gray flex flex-col items-center
      Tablet:w-3/5
      Laptop:w-2/5
      4K:rounded-[2rem]"
            onSubmit={e => e.preventDefault()} {...modalHandler}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={modalRef}>

            {/* HEADER */}
            <Container className="flex items-center justify-between p-4 w-full border-b-[1px] border-solid border-[#3F3E45]
          Tablet:justify-end
          LaptopL:px-8 LaptopL:py-8
          4K:py-20 4K:border-b-4">
              <h1 className="text-xl text-[#cdcdcd]
            Tablet:absolute Tablet:left-1/2 Tablet:-translate-x-1/2
            LaptopL:text-4xl
            4K:text-7xl">{label}</h1>
              <IoMdClose className='cursor-pointer w-8 h-8 fill-[#cdcdcd]
            LaptopL:w-12 LaptopL:h-12
            4K:w-20 4K:h-20' onClick={() => closeModal()} />
            </Container>

            {/* BODY */}
            <Container className="p-4 w-full h-fit flex flex-col justify-between
          Tablet:pb-8
          Laptop:px-6 Laptop:gap-y-4
          LaptopL:pt-10
          4K:py-24 4K:gap-y-16">
              {children}
            </Container>
          </motion.form>
        </motion.div>
      }
      <AnimatePresence>
        {message.isOpen && <Message />}
      </AnimatePresence>
    </AnimatePresence>
  )
}