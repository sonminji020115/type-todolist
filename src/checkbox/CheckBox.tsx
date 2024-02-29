// CheckBox.tsx
import React, { useState } from 'react';

import './CheckBox.css'

interface CheckBoxProps {
    checked?: boolean;
    onClick?(): void;
}

const CheckBox = ({
    checked,
    onClick
}: CheckBoxProps ) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='CheckBox'>
            <div onClick={handleClick} style={{ width: '31px', height: '31px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isChecked ? '❤︎' : ''}
            </div>
        </div>

    )
}

export default CheckBox;