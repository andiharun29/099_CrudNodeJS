import express, {Router} from "express";
const router = express.Router();
const daerah = [
    {
        kota : "kendari",
        provinsi: "sulawesi tenggara",
        pulau : "sulawesi",
        tahun : 2024,
    },
    {
        kota : "yogyakarta",
        provinsi: "D.I.Y",
        pulau : "jawa",
        tahun : 2024,
    },
];
router.get("/", (req, res) => {
    res.send(daerah);
});
export default router;