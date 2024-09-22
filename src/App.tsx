import { useState, useEffect } from "react";
import axios from "axios";
import MainTablePage from "./pages/MainTablePage";
import { Link } from "react-router-dom";


function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.luffy020404.workers.dev/read")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div>Employees</div>
            <Link to='/add-employee'> Add Employee </Link>
            <MainTablePage employees={employees} />
        </>
    );
}

export default App;
