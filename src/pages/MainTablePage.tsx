import axios from "axios";
import { Link } from "react-router-dom";

export default function MainTablePage({ employees }: any) {
    function handleDelete(id: Number) {
        axios
            .delete("https://api.luffy020404.workers.dev/delete/" + id)
            .then(() => {
                window.location.reload();
            });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee: any) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.role}</td>
                                <td>
                                    {" "}
                                    <Link to={"/edit/" + employee.id}>
                                        <button>Edit</button>{" "}
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleDelete(employee.id);
                                        }}
                                    >
                                        Delete
                                    </button>{" "}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
