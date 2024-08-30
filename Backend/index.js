import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import { dbConnect } from "./config/dbConnect.js";
import { AuthRoutes, MovieRoutes } from "./routes/routes.js";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
<<<<<<< HEAD
=======
import  bookingRoutes from './routes/bookingRoutes.js';
>>>>>>> f28948b0849b400a9b61b7d67a2f90404e58ea21

const app = express();
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------

// MiddleWares
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

// ---------------------------------------------------

// routers
<<<<<<< HEAD
app.use("/api/auth", AuthRoutes);
app.use("/api/movies", MovieRoutes);
=======

app.use('/api/auth', AuthRoutes);
app.use('/api/movies', MovieRoutes);
app.use('/api/book', bookingRoutes);

>>>>>>> f28948b0849b400a9b61b7d67a2f90404e58ea21

// start server
dbConnect().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server running at port : ${PORT}`);
  });
});

// Error Middleware
app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
