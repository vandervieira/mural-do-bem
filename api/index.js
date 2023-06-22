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
dotenv.config({ path: path.join(__dirname, '/../.env') });

const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true, //To use cookies with axios we need to set the credentials to true
}));
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});
app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/posts", postRoutes)
app.get("/", (req, res) => {
    res.json("API do Mural do Bem! Para mais informações acesse: github.com/vandervieira/mural-do-bem")
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server rodando na porta ", process.env.APP_PORT)
})
