import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        
          <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout