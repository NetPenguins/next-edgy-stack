import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <div className='
      bg-white 
      dark:bg-transparent
      text-black 
      dark:text-white
      '>
      <Meta />
      <div className="min-h-screen">
        { preview && <Alert preview={preview} /> }
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
