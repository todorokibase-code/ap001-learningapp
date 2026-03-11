import { useState } from 'react';
import React from 'react';

const Sample = () => {
    const [text, setText] = useState('');
    // 入力日付用のstate
    const [learningDate, setLearningDate] = useState('2026-03-30');

    function handleClick() {
        // alert('You clicked me!')
        setText('You clicked me!')
    }
    function handleBtnClick() {

    }
    // 日付を変更した時のハンドラー
    function handleChangeLearningDate(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setLearningDate(e.target.value)
        // setLearningDate(e)
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
                <input id='learningdate' type='date' value={learningDate}
                    onChange={(e) => { handleChangeLearningDate(e) }} />
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
            <button onClick={handleBtnClick}>登録</button>

        </>
    )

}
export default Sample;

