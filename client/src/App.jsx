import React from "react";

import { Routes, Route } from "react-router-dom";

import Books from "./routes/Books/Books.route";
import Add from "./routes/Add/Add.route";
import Update from "./routes/Update/Update.route";

const App = () => {
    return (
        <>
            <main className="app">
                <Routes>
                    <Route index path="/" element={<Books />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/update/:id" element={<Update />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
