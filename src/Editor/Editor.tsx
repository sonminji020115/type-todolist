import { useRef, useState } from "react";

import './Editor.css'

interface Props {
    clickAdd: (text: string) => void;
    newTxtRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Editor = (props: Props) => {
    const [text, setText] = useState('');

    const newTxtRef = useRef<HTMLInputElement>(null);

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };


    const clickBtn = () => {
        props.clickAdd(text);
        setText("");
    };
    
    // 엔터키
    const enterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            clickBtn();
        }
    }

    return (
        <div className="Editor">
            <div className="Editor_wrap">
                <p>TASK</p>
                <input
                    ref={newTxtRef}
                    value={text}
                    onChange={changeInput}
                    placeholder="할 일을 입력해주세요."
                    onKeyDown={enterKeyDown}
                />
                <button
                    onClick={clickBtn}
                >add</button>
            </div>
        </div>
    )
}

export default Editor;