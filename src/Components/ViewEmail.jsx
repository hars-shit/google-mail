import { useOutletContext } from "react-router-dom"

const ViewEmail=()=>{
    const {openDrawer}=useOutletContext();
    return(
        <div style={openDrawer ? {marginLeft:250,width:'100%'}:{width:'100%'} }>view mail</div>
    )
    div
    }
    export default ViewEmail