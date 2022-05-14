import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express()

app.use(express.json())
app.use("/api", userRouter)
app.use("/api", postRouter)

app.listen(8080, () => console.log("port 8080"))