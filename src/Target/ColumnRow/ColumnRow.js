import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import './ColumnRow.scss';

const columnRow = (props) => {

    let classes = "item list-group-item  d-flex align-items-center";
    if(props.selected) {
        classes = classes + " bg-light";
    }

    return <li className={classes} onClick={() => {props.onItemClick(props.childs)}}>
        <img src={props.img}/>
        <span className={'p-2'}>{props.name}</span>
        <span className="ml-auto p-2">
                <FontAwesomeIcon icon={faCaretRight} className={'text-light'} />
            </span>
    </li>
};

export default columnRow;