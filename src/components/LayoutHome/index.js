import NavbarHome from '../NavbarHome';
function LayoutHome (props){
    return(
        <div>
            <NavbarHome/>
            {props.children}
        </div>
    )
}
export default LayoutHome;