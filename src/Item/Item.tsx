import React, { useState } from 'react';

import CheckBox from "../checkbox/CheckBox";
import './Item.css'

import { Todo } from "../types"

interface Props extends Todo {
    clickDelete: (id: number) => void;
}

interface ItemProps {
    completed?: boolean;
    text: string;
}

const Item: React.FC<Props> = (props: Props, {
}: ItemProps) => {
    const clickDel = () => {
        props.clickDelete(props.id);
    }

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <li className="Item slide-in">
            <p>{props.id + 1 + '.'}</p>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id={`cbtest-${props.id}`}
                className="labelStyle" />
            <label htmlFor={`cbtest-${props.id}`} className="labelStyle"></label>
            <p className={isChecked ? "checkmark visible" : "checkmark"}>{props.content}</p>
            <button onClick={clickDel}>X</button>
        </li>
    )
}

export default Item;