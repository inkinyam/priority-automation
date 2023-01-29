import "./Layout.scss"
import Sidebar from "../Sidebar/Sidebar";


 const Layout = ({children}) => {
  return ( 
    <div className="App"> 
      <Sidebar/>
      <div className="page">
        {children}
         {/* <Outlet/> */}
    
      </div>
    </div>
  )
}

export default Layout;