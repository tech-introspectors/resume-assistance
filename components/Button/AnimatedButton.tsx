const AnimatedButton = ({ label, customStyle }: any) => {
  return (
    <button
      className={`relative z-0 h-10 cursor-pointer overflow-hidden rounded-md border-none bg-primaryBlue px-10 outline-none transition-all duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-primaryBlueLight before:transition-all before:duration-500 before:content-[""] hover:scale-105 hover:shadow-sm hover:shadow-primaryBlue hover:before:w-full ${customStyle}`}
    >
      {label}
    </button>
  )
}

export default AnimatedButton
