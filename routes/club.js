import express, {Router} from "express";
const router = express.Router();
const club = [
    {
        nama : "liverpool FC",
        liga: "inggris",
        banyak_piala : "90",
        tahun : 2024,
    },
    {
        nama : "atletico de madrid",
        liga: "spanyol",
        banyak_piala: "80",
        tahun : 2024,
    },
];
router.get("/", (req, res) => {
    res.send(club);
});
export default router;