const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { logger } = require("./middleware/log/logEvents");
const errorHandler = require("./middleware/errorHandle/errorHandler");
const credentials = require("./middleware/credential/credentials");
const corsOptions = require("./config/corsOptions");
const cmhccRoutes = require("./routes/cmhccRoutes")
require('dotenv').config();
const PORT = process.env.PORT;

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello from root \n");
});

app.use('/cmhcc-api', cmhccRoutes);

app.all("*", (req, res) => {
    res.status(404);
});
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));