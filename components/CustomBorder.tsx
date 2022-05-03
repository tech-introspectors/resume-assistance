interface Props {
  customStyle: string
}

const CustomBorder = ({ customStyle }: Props) => {
  return (
    <div className={` h-[1px] w-full bg-lightTextColor/50 ${customStyle}`} />
  )
}

export default CustomBorder
