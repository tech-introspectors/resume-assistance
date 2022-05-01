interface Props {
  customStyle: string
}

export const SVG_Logo = ({ customStyle }: Props) => {
  return <img className={customStyle} src="/images/main_logo.svg" alt="logo" />
}
