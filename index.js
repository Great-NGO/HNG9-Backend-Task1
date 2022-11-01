require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {

    const response = {
        "slackUsername": "Great Nwamadi",
        "backend": true,
        "age": 20,
        "bio": "My name is Great Nwamadi. I am a student and a Fullstack developer. I love the Javascript ecosystem and all the various fields in Tech you can use Javascript for. I use Node JS for backend development and React JS and Javascript for Frontend development. I love Software engineering and i am grateful to be a member of the HNG9 internship program."
    }

    res.json(response)
})

app.listen(PORT, ()=> {
    console.log(`Server up and running on PORT ${PORT}`)
})