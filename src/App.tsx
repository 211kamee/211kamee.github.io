import { useEffect, useState } from "react";

function App() {
    const [toDo, setToDo] = useState(() => {
        const storedData = localStorage.getItem("data") || `[]`;
        return JSON.parse(storedData);
    });
    const data = toDo;

    const [val, setVal] = useState("");

    useEffect(() => {
        setToDo(data);
        localStorage.setItem(`data`, JSON.stringify(toDo));
        console.log(`todo`, toDo);
        console.log(`data`, data);
    }, [val]);

    return (
        <>
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <button
                onClick={() => {
                    if (val.trim()) {
                        data[data.length] = val;
                        setVal("");
                    } else window.alert(`Enter tasks to "add" in List`);
                }}
            >
                Add
            </button>
            <ul id="todos">
                {toDo.map((e = "", k = -1) => (
                    <li key={k}>
                        {e}{" "}
                        <button
                            onClick={() => {
                                data.splice(k, 1);
                                setVal(" ");
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
