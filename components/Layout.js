import Header from './Header'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      {children}
    </>
  )
}
