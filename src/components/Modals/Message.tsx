import { AnimatePresence, motion } from "framer-motion";
import useMessage from "../../hooks/useMessage";



export function Message () {

  const {error,success} = useMessage()

return (
    <AnimatePresence>
      <motion.div className="fixed left-[10%] border-[#cdcdcda8] linear-bg-gray
      flex w-[80%] rounded-lg p-4"
       initial={{y:420}} animate={{y:190}} exit={{y:420}}>
        <svg className={`w-12 h-12 ${success ? 'fill-emerald-600' : 'fill-red-600'}`}>
        <use xlinkHref={`./sprite.svg#${success ? 'success' : 'error'}`}/>
        </svg>
        <div className="flex flex-col w-full">
          <h1 className={`title font-bold`}>{success && "Success"} {error && "Error"}</h1>
          <p className="subTitle">
            {success && "Numbers changed successfully"}
            {error && <p>Enter numbers or contact <a href="tel:88005553535">Admin</a></p>}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
)
}