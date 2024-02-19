import { useState } from "react";
import data from "./data";

// single selection accordion method
export default function Accordion() {
    // Null since nothing is selected on every first visit
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ?
                                <div className="content">{dataItem.answer}</div>
                                : null
                        }
                    </div>)
                    : <div>No data found.</div>
            }
        </div>
    </div>
}