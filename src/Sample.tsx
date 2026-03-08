import { useState } from 'react';

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
        </>
    )

}
export default Sample;

