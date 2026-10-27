import { Outlet } from 'react-router'
import Header from './Header.jsx'

// Shared shell for every page: header on top, current page below.
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
