import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/mobil.js";
import daerahRoute from "./routes/daerah.js";
import clubRoute from "./routes/club.js";

const app = express();
const PORT = 8000;

app.use("/mobil", mobilRoute);
app.use("/daerah", daerahRoute);
app.use("/club", clubRoute);


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagi");
});

app.use(bodyParser.json());
app.listen(PORT, () =>
    console.log(`sServer berjalan di port : http://localhost:${PORT}`));