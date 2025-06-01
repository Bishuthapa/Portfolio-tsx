import { NavLink, Outlet } from "react-router-dom"
function Blogs(){
  return(
    
  <div className="h-auto w-full mx-auto px-6 py-10 ">
    <h1 className="text-4xl font-bold mb-8">Blogs</h1>
     <ul>
      <li>
        <NavLink to="about-ai" className="hover:opacity-80">The Challenges and Joys of Learning AI</NavLink></li>

        <li><NavLink to="Future-of-computer" className="hover:opacity-80">Future of Computer</NavLink></li>
     </ul>
     <div>
        <Outlet/>
     </div>
  </div>

  )


}
export default Blogs