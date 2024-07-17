import { Link } from "react-router-dom"

const Title = ()=>{
    return (
      <a href="/">
      <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className='Logo'/>
      </a>
    )
  }
  
  const Header = ()=>{
    return(
      <div id="header">
        <Title/>
        <div id="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/Contact">Contact</Link></li>
            <li><Link to = "/cart">Cart</Link></li>
            <li><Link to = "/instamart">Instamart</Link></li>
          </ul>
        </div>
      </div>
  
    )
  }
  

export default Header;

