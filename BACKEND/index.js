import app from "./app";

const { PORT } = process.env;
const port = PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}`));
