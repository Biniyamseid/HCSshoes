import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"


const Nav = () => {
  return (
    <header className=" padding-x py-8 w-full absolute  " >
      <nav className="flex justify-between  ">
        <a>
          <img  className=""
            src ={headerLogo}
            height={175}
            width={175}
          />

        </a>
        <ul className="flex gap-20 padding-x max-lg:hidden "> 
          {navLinks.map((item)=>(
            <li key = {item.label}>
              <a  className="text-black "> 
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <img className="hidden max-lg:block "
        src={hamburger}
        width={25}
        height={25}
       >
        </img>
      </nav>
    </header>
  )
}

export default Nav