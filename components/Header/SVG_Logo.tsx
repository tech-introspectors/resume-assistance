interface Props {
  customStyle: string
}

export const SVG_Logo = ({ customStyle }: Props) => {
  return (
    <svg
      width="126"
      height="148"
      viewBox="0 0 126 148"
      fill="none"
      className={customStyle}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71 22V126C85.587 126 99.5766 120.521 109.891 110.769C120.206 101.017 126 87.7913 126 74C126 60.2087 120.206 46.9821 109.891 37.2305C99.5766 27.4786 85.587 22 71 22Z"
        fill="#2752E7"
      />
      <path
        d="M71 21.5411V0H0V148H71V126.459C56.4556 126.459 42.5067 120.932 32.2226 111.094C21.9382 101.256 16.1604 87.913 16.1604 74C16.1604 60.087 21.9382 46.7437 32.2226 36.906C42.5067 27.068 56.4556 21.5411 71 21.5411Z"
        fill="white"
      />
    </svg>
  )
}
