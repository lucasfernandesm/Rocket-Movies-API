

require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations")

migrationsRun();

const AppError = require("./utils/AppError");

const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./routes");

app.use(routes);

app.use(( error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const cors = require("cors");
app.use(cors());

const uploadConfig = require("./configs/upload");
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

const PORT = 3000;

app.listen(PORT, () => { console.log(`Server is running on ${PORT}`)});

