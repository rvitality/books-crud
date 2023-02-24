import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
});

app.use(express.json());
app.use(cors());

app.listen(8800, () => {
    console.log("Connected to backend!");
});
