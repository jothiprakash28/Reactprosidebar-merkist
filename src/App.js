import './App.css';
//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// sidebar import
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { IoTvOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCellTower } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FaPersonRunning } from "react-icons/fa6";
import { MdSpatialTracking } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { MdOutlineJoinInner } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import LogoImg from '../src/Components/Assests/logo.png';

//navbar imports
import { FaSearch } from "react-icons/fa";
import { ImFolderPlus } from "react-icons/im";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";
import { SiCocacola } from "react-icons/si";
import { CgToggleSquare } from "react-icons/cg";


function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl} =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
    return (
      <div className='app'>
        <div
          id="sidebar-container"
          style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
        >  
        {/* SideBar code starts here       */}
          <Sidebar
            //change background color
            backgroundColor="#08321e"
            rtl={false}
            style={{ height: "100vh" }}
            breakPoint="sm"
            transitionDuration={800}
          >
            <Menu>
              <div className='side-root-container'>
              <MenuItem
                icon={<GiHamburgerMenu size="20"/>}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center" }}
              >
                <img src={LogoImg} alt="Logo" width="180" height="60"/>
                
              </MenuItem>
              </div>
            <div className='dash-container'>
            <MenuItem ><h1 className='dashTxt'> Dashboard</h1></MenuItem>
            </div>
              <div className='side'>
                <MenuItem icon={<IoTvOutline size="25"/>}><span className='menu_txt'>Advertise</span></MenuItem>
                <MenuItem icon={<MdCellTower size="25"/>}><span className='menu_txt'>Radar</span></MenuItem>
                <MenuItem icon={<FaPersonRays size="25"/>}><span className='menu_txt'>Engage</span></MenuItem>
                <MenuItem icon={<SiGoogleanalytics size="25"/>}><span className='menu_txt'>Analystics</span></MenuItem>
                <MenuItem icon={<FaPersonRunning size="25"/>}><span className='menu_txt'>Activities</span></MenuItem>
                <MenuItem icon={<MdSpatialTracking size="25"/>}><span className='menu_txt'>Tracking</span></MenuItem>
                <MenuItem icon={<MdInsights size="25"/>}><span className='menu_txt'>Insights</span></MenuItem>
                <MenuItem icon={<MdOutlineJoinInner size="25"/>}><span className='menu_txt'>Intgration</span></MenuItem>
                <MenuItem icon={<IoSettings size="25"/>}><span className='menu_txt'>Settings</span></MenuItem>
                <MenuItem icon={<BsPersonCheck size="25"/>}><span className='menu_txt'>Support</span></MenuItem>
              </div>
              <div className='team-chat-container'>
              <MenuItem icon={<GoPersonFill size="25"/>}><span className='menu_txt'>Team Chat</span></MenuItem>
              </div>
              
            </Menu>
          </Sidebar>
          {/* SideBar code ends here       */}

          <div className="navbar-container">


            {/* navbar code starts here */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-sucess">
              <i className="navbar-brand  p-3  text-light" onClick={() => {
                  toggle();
                }}>
                  <CgToggleSquare/>
              </i>
              <ul className="navbar-nav ms-auto d-md-flex flex-row justify-content-center pt-2 mt-lg-0 font">
              <li className="nav-item">
                  <a className="nav-link" href="#"><FaSearch className='nav-style'/></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#"><ImFolderPlus className='nav-style'/></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><BsFillEnvelopeExclamationFill className='nav-style' /></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#"><HiBellAlert className='nav-style'/></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#"><SiCocacola className='cocaola' /></a>
              </li>
              </ul>
            </nav>
            {/* navbar code starts here */}

            {/* plain card for the dashboard starts here */}
            <div className='plain-card-container'>
              <div className='plain-card'>    
              </div>
            </div>
            {/* plain card for the dashboard ends here */}


          </div>
        </div>
      </div>
    );
  }
  
  export default App;
