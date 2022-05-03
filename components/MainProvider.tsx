import Footer from './Footer/Footer'
import Header from './Header/Header'

const MainProvider = ({ children }: any) => {
  return (
    <div className="relative h-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainProvider
