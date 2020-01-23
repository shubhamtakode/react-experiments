import React from "react";
import TargetItem from "../TargetItem/TargetItem";
import "./TargetMaterialColumn.scss";
const  targetMaterialColumn = (props) => {

    let itemsList = [];
    if(props.items) {
        itemsList = props.items.map((item) =>{
            return  <TargetItem name={item.name} img={item.img} onItemClick={props.itemClicked} qty={item.qty} childs={item.items} key={item.id}></TargetItem>;
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