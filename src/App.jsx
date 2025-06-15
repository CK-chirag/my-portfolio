import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DomainPage from "./components/DomainPage/DomainPage";
import TechPage from "./components/TechPage/TechPage";     // Adjust the path if needed

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DomainPage />} />
                <Route path="/tech" element={<TechPage />} />
            </Routes>
        </BrowserRouter>
    );
}