import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Update.styles.scss";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        cover: "",
        price: 0,
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname?.split("/").at(-1);

    const changeHandler = e => {
        setBook(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const submitHandler = async e => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${bookId}`, book);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="section-py section-px">
            <h1 className="heading-primary">Update Book</h1>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} placeholder="title" name="title" />
                <input type="text" onChange={changeHandler} placeholder="desc" name="desc" />
                <input type="text" onChange={changeHandler} placeholder="cover" name="cover" />
                <input type="number" onChange={changeHandler} placeholder="price" name="price" />
                <button type="submit">Update</button>
            </form>
        </section>
    );
};

export default Update;
