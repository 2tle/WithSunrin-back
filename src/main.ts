import express, {Request, Response, NextFunction} from "express";

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening port 3000!");
});
