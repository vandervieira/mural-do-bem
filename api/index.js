import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import multer from "multer"
import path from 'path';
import dotenv from 'dotenv';
const __dirname = path.resolve();
dotenv.config();

const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true, //Para utilizar cookies via Axios é necessário habilitar o cors credentials
}));
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
    if (req.file) {
        const file = req.file;
        res.status(200).json(file.filename);
    } else {
        res.status(400).json("Nenhum arquivo foi enviado");
    }
});
app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/posts", postRoutes)
app.get("/*", (req, res) => {
    console.log(req.method + ' ' + req.path + ' ', req.get('origin') ? 'ORIGIN:' + req.get('origin') : '')
    res.json("API do Mural do Bem! Para mais informações acesse: github.com/vandervieira/mural-do-bem")
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server rodando na porta ", process.env.APP_PORT)
})
