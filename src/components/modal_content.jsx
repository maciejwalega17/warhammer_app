import React from "react";
import List from "./list";


const ModalContent = ({content}) => {
    
    return(<>
    <List title='Core Stratagems:' listArr={content}/>
    
    </>)
}
export default ModalContent