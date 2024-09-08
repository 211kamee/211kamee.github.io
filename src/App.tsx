import { useEffect, useState } from "react";

function App() {
    // Initialize state with data from localStorage
    const [toDo, setToDo] = useState<string[]>(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });
    
    const [val, setVal] = useState<string>("");

    useEffect(() => {
        // Update localStorage whenever `toDo` changes
        localStorage.setItem("data", JSON.stringify(toDo));
        console.log("todo", toDo);
    }, [toDo]);

    const addTask = () => {
        if (val.trim()) {
            setToDo((prevToDo) => [...prevToDo, val]); // Use functional update to ensure the latest state
            setVal(""); // Clear input field
        } else {
            window.alert('Enter tasks to "add" in List');
        }
    };

    const removeTask = (index: number) => {
        setToDo((prevToDo) => prevToDo.filter((_, i) => i !== index));
    };

    return (
        <>
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <button onClick={addTask}>
                Add
            </button>
            <ul id="todos">
                {toDo.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button onClick={() => removeTask(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
