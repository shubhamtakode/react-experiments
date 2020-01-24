import React, {useEffect, useState, useRef} from "react";
import "./EditQty.scss"

function EditQty(props) {
    const [qty, setQty] = useState(props.defaultQty);
    const prevQtyRef = useRef();

    useEffect(() => {
        prevQtyRef.current = props.defaultQty;
        if (prevQty !== props.defaultQty) {
            setQty(props.defaultQty);
        }
    });
    const prevQty = prevQtyRef.current;

    return <div className={''}>
        <div className={'col-xs-12 p-3'}>
            Target Quantity (In Tones)
            <input type="number" value={qty} onChange={(event) => {
                setQty(Number(event.target.value))
            }}/>
        </div>
        <div className={'col-xs-12 p-3'}>
            <button className={'btn btn-primary'} onClick={() => {
                if(props.validationQty > 0 && qty <= props.validationQty) {
                    return;
                }
                props.updateQty(qty)
            }}>
                Save and Next
            </button>
        </div>
    </div>
}

export default EditQty;