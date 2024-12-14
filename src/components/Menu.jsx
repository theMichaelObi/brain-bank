import { useRef } from "react";


export default function Menu({ setUsername }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    return (
        <div className="menu">
            <h1 className="menuTitle">Brain Bank</h1>
            <input type="text" placeholder="Enter Username" className="menuInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )
}
