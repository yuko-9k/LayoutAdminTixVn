import React from 'react';
import { connect } from 'react-redux';
import {actChangeLocation} from './modules/action';
 function DropdownItem(props) {
    const closeModalLocation=()=>{
        document.getElementById("modal-locaition").style.display="none";
        let close =  document.getElementsByClassName("modal-backdrop");
        if(close.length>0)
        {
            close[0].style.display="none";
        }
    }
   const changeLocation = ()=>{
        closeModalLocation();
        props.changeLCT(props.location);
   } 
    return (
        <a className="dropdown-item" href="#" onClick={changeLocation}>{props.location.city}</a>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        changeLCT:(lc)=>{
            dispatch(actChangeLocation(lc));
        },
    }
}
export default connect(null,mapDispatchToProps)(DropdownItem);
