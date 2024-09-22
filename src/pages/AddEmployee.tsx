import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddEmployee() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = () => {
        const obj = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            dob: dob,
            role: role,
        };
        axios
            .post("https://api.luffy020404.workers.dev/create", obj)
            .then(() => {
                window.alert("Success");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <h1>Add Employee Data</h1>
            <input
                type="text"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                placeholder="First Name"
            />
            <br />
            <input
                type="text"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                placeholder="Last Name"
            />
            <br />
            <input
                type="text"
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value);
                }}
                placeholder="Phone No."
            />
            <br />
            <input
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                placeholder="Email"
            />
            <br />
            <input
                type="text"
                value={role}
                onChange={(e) => {
                    setRole(e.target.value);
                }}
                placeholder="Role"
            />
            <br />
            <div>Date of Birth</div>
            <input
                type="date"
                value={dob}
                onChange={(e) => {
                    setDob(e.target.value);
                }}
                placeholder="Date of Birth"
            />
            <br />
            <br />

            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
            <Link to="/">Home</Link>
        </>
    );
}
