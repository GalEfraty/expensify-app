const express = require("express");
const path = require("path");

const port = 3000 || process.env.PORT;
const app = express();
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Serve is up on port ${port}`);
});
