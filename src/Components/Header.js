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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  
    )
  }
  

export default Header;

