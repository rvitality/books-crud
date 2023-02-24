import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Add.styles.scss";

const Add = () => {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        desc: "",
        cover: "",
        price: 0,
    });

    const changeHandler = e => {
        setBook(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const submitHandler = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);

            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="section-py section-px">
            <h1 className="heading-primary">Add new book</h1>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} placeholder="title" name="title" />
                <input type="text" onChange={changeHandler} placeholder="desc" name="desc" />
                <input type="text" onChange={changeHandler} placeholder="cover" name="cover" />
                <input type="number" onChange={changeHandler} placeholder="price" name="price" />
                <button type="submit">Add</button>
            </form>
        </section>
    );
};

export default Add;
