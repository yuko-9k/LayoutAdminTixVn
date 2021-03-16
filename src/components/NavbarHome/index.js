import React from 'react'
import Logo from '../../img/logo/web-logo.png';
import LocationHeader from '../../img/Icon/location-header.png';
import Avatar from '../../img/Icon/avatar.png';
import Next from '../../img/Icon/next-session.png';
import MenuIcon from '../../img/Icon/menu-options.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Location from './dropdownItem';

 function NavbarHome(props) {

    const openNav = ()=>{
        document.getElementById('mobile_menu_canvas').style.width ='30%';
        document.getElementById("mobile_menu_canvas").style.opacity = "1";
        document.getElementById("moblie_menu").style.right = "0";
    }
   const closeNav=()=>{
        document.getElementById("moblie_menu").style.right = "-70%";
        document.getElementById("mobile_menu_canvas").style.opacity = "0";
        document.getElementById("mobile_menu_canvas").style.width = "0";
    }
    const openModalLocation = () =>{
        document.getElementById("modal-locaition").style.display="block";
        let show = document.getElementsByClassName("modal-backdrop");
         if(show.length<0){
             show[0].style.display="block";
         }
    }
    const RenderListLocation = () =>{
        const  {listLocation} = props;
            return listLocation.map((location)=>{
                return   <Location key={location.stt}  location={location}/>
             });
    }
    return (
        <header>
        <div className="header_nav_bar">
            <nav className="header_menu">
                <div className="header_logo">
                    <Link to="/home"> <img src={Logo} alt="logo"/></Link>
                </div>
                <button className="menu_option" type="menu"  onClick={openNav}>
                    <span><img src={MenuIcon} alt="menuIcon" /></span>
                </button>
                <div className="header_menu_mid">
                    <ul className="menu_items">
                        <li className="menu_item_link">
                            <a href="#movie_schedule_tix">Lịch Chiếu</a>
                        </li>
                        <li className="menu_item_link">
                            <a href="#cinema_block_tix">Cụm rạp</a>
                        </li>
                        <li className="menu_item_link">
                            <a href="#news_tix">Tin Tức</a>
                        </li>
                        <li className="menu_item_link">
                            <a href="#app_tix">Ứng dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="header_menu_right">
                    <div className="header_login">
                        <img src={Avatar} alt="avatar" />
                        <span>Đăng Nhập</span>
                    </div>
                    <div className="dropdown dropdown_place_header">
                        <img className="place-header" src={LocationHeader} alt="Icon" />
                        <div className="select-menu" data-toggle="dropdown">
                            <span>{props.location.city}</span>
                        </div>
                        <div className="dropdown-menu">
                            {RenderListLocation()}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="mobile_menu_canvas" className="overlay" onClick={closeNav}></div>
        <div id="moblie_menu" className="sidepanel">
            <nav>
                <ul>
                    <li className="sidepanel_frist_item">
                        <a href="#">
                            <div className="header_login">
                                <img className="avata" src={Avatar} alt='avatar' />
                                <span>Đăng Nhập</span>
                            </div>
                        </a>
                        <img className="button_close_sidepanel" src={Next}onClick={closeNav} />
                    </li>
                    <li>
                        <a href="#" onClick={closeNav}>Lịch Chiếu</a>
                    </li>
                    <li>
                        <a href="#">Cụm rạp</a>
                    </li>
                    <li>
                        <a href="#news_tix" onClick={closeNav}>Tin Tức</a>
                    </li>
                    <li>
                        <a href="#app_tix" onClick={closeNav}>Ứng dụng</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modal-locaition" onClick={openModalLocation}>{props.location.city}</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="modal" id="modal-locaition">
            <div className="modal-dialog modal-location_tix">
                <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                         {RenderListLocation()}
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
const mapStateToProp = (state) =>{
    return{
        listLocation:state.LocationState.listLocation,
        location:state.LocationState.location
    }
}
export default connect(mapStateToProp,null)(NavbarHome);