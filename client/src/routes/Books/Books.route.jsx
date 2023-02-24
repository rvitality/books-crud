import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Books.styles.scss";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                console.log(res);
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAllBooks();
    }, []);

    const deleteHandler = async id => {
        try {
            await axios.delete(`http://localhost:8800/books/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="section-books" className="section-px section-py">
            <h1 className="heading-primary">Book Shop</h1>
            {books.length > 0 ? (
                <div className="books">
                    {books.map(({ id, title, desc, cover, price }) => (
                        <div className="book" key={id}>
                            {cover && <img src={cover} alt={title} />}
                            <h2 className="title">{title}</h2>
                            <p>{desc}</p>
                            <div>₱{price}</div>
                            <div className="actions">
                                <button className="update">
                                    <Link to={`/update/${id}`}>Update</Link>
                                </button>
                                <button className="delete" onClick={() => deleteHandler(id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No books.</h2>
            )}

            <Link to="/add" className="add-new-btn">
                Add new book
            </Link>
        </section>
    );
};

export default Books;
