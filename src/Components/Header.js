import { Link } from "react-router-dom"

const Title = ()=>{
    return (
      <a href="/">
      <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className='h-28 p-2'/>
      </a>
    )
  }
  
  const Header = ()=>{
    return(
      <div className="flex justify-between bg-pink-100 shadow-inner">
        <Title/>
        <div id="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to = "/about">About</Link></li>
            <li className="px-2"><Link to = "/Contact">Contact</Link></li>
            <li className="px-2"><Link to = "/cart">Cart</Link></li>
            <li className="px-2"><Link to = "/instamart">Instamart</Link></li>
          </ul>
        </div>
      </div>
  
    )
  }
  

export default Header;

