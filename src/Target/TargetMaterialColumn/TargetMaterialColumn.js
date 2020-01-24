import React from "react";
import ColumnRow from "../ColumnRow/ColumnRow"
import "./TargetMaterialColumn.scss";
const  targetMaterialColumn = (props) => {

    let itemsList = [];
    if(props.items) {
        itemsList = props.items.map((item) =>{
            return  <ColumnRow name={item.name} img={item.img} onItemClick={props.itemClicked} qty={item.qty} childs={item.items} key={item.id} id={item.id}></ColumnRow>;
        })
    }

    return <div className={'target-column border-right'}>
        <div className={'col-12 heading bg-light font-weight-bold d-flex p-2'}>
            {props.heading}
        </div>
        <div className={'list'}>
            <ul className="list-group">
                {itemsList}
            </ul>
        </div>
    </div>
}

export default targetMaterialColumn;