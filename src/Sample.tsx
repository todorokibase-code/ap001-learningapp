import { useState } from 'react';
import React from 'react';
const Sample = () => {
    const [text, setText] = useState('');
    function handleClick() {
        // alert('You clicked me!')
        setText('You clicked me!')
    }
    return (
        <>
            <h1>Sample</h1>
            <button onClick={handleClick}>
                Click me
            </button>
            <p>ボタンを押すと変化：{text}</p>
            <div>
                <label htmlFor="learningdate">日付:</label>
                <input id='learningdate' type='date'></input>
            </div>
            <div>
                <label htmlFor='learningcontents'>
                    内容を記載する
                    <textarea id="learningcontents"></textarea>
                </label>
            </div>
            <div>
                <label htmlFor='contentstag'>
                    タグ
                    <input type='text' id="contentstag"></input>
                </label>
            </div>

        </>
    )

}
export default Sample;

