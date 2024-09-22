import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee.tsx";
import EditEmpDet from "./pages/EditEmpDet.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmpDet />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
