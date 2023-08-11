import { motion } from "framer-motion";
import useMessage from "../../hooks/useMessage";



export function Message() {

  const { error, success, _subTitle, _title } = useMessage()

  return (
    <motion.div className="fixed left-[10%] bottom-0 border-[#cdcdcda8] linear-bg-gray
      flex gap-x-4 w-[80%] rounded-lg px-4 py-2
      Tablet:left-[35%] Tablet:w-[60%] Tablet:px-8 Tablet:py-4 Tablet:text-xl
      Laptop:left-[55%] Laptop:w-[40%] Laptop:text-2xl
      LaptopL:left-[77.5%] LaptopL:w-[20%] LaptopL:text-xl
      4K:left-[72.5%] 4K:bottom-[1%] 4K:w-[25%] 4K:text-6xl 4K:px-16 4K:py-12"
      initial={{ y: 200 }}
      animate={{ y: -10 }}
      exit={{ y: 200 }} >
      <div className="flex items-center LaptopL:items-start LaptopL:py-2">
        <svg className={`w-12 h-12 ${success ? 'fill-emerald-600' : 'fill-red-600'}
          Laptop:w-16 Laptop:h-16
          LaptopL:w-10 LaptopL:h-10
          4K:w-24 4K:h-24`}>
          <use xlinkHref={`./sprite.svg#${success ? 'success' : 'error'}`} />
        </svg>
      </div>
      <div className="flex flex-col w-full">
        <h1 className={`title font-bold`}>
          {_title
            ? _title
            : success ? "Success" : "Error"}
        </h1>
        <p className="subTitle">
          {_subTitle
            ? _subTitle
            : error
              ? <p>Enter numbers or contact <a className="text-blue-600" href="tel:88005553535">Admin</a></p>
              : <p>Numbers changed successfully</p>
          }
        </p>
      </div>
    </motion.div>
  )
}