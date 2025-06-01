import { NavLink, Outlet } from "react-router-dom"
function Blogs(){
  return(
    
  <div className="h-auto w-full mx-auto px-6 py-10 ">
    <h1 className="text-4xl font-bold mb-6">Blogs</h1>
     <ul>
      <li>
        <NavLink
          to="about-ai"
          className={({ isActive }) =>
        isActive
          ? "text-blue-600 transition-all duration-200"
          : "hover:font-bold transition-all duration-200"
          }
        >
          Challenges and Joys of Learning AI
        </NavLink>
      </li>

      <li>
        <NavLink
          to="Future-of-computer"
          className={({ isActive }) =>
        isActive
          ? "text-blue-600 transition-all duration-200"
          : "hover:font-bold transition-all duration-200"
          }
        >
          Future of Computer
        </NavLink>
      </li>
     </ul>
     <div>
        <Outlet/>
     </div>
  </div>

  )


}
export default Blogs