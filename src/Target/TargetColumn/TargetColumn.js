import React from "react";
import "./TargetColumn.scss";
import EditQty from "../EditQty/EditQty"
const  targetColumn = (props) => {
    return <div className={'target-column border-right'}>
        <div className={'col-12 heading bg-light font-weight-bold d-flex p-2'}>
            {props.heading}
        </div>
        <div className={'list'}>
            <EditQty defaultQty={props.defaultQty} updateQty={props.updateQty}></EditQty>
        </div>
    </div>
}

export default targetColumn;