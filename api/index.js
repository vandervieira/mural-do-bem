import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, () => {
    console.log( "Server is running on port 8800" )
})