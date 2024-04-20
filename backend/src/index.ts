import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import uploadRoutes from "./routes/upload";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoute from "./routes/courses";

const app = express();
dotenv.config();

//middlewares
app.use(cors({ credentials: true, origin: ["http://localhost:5173","http://127.0.0.1:5173"] }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/upload", uploadRoutes);

app.use("/api/auth", authRoutes);
// user Routes
// app.use("/api/users", userRoutes);

// course Routes
app.use("/api/course", courseRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen(8800, () => {
    console.log("Connected to Server");
});
