const express = require("express")

const app = express();

app.use(express.json());

// Import routes
const handlerRouter = require("./routes/routes");

// Setup all the routes
app.use(handlerRouter);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
	console.log(`listening on port ${port}`);
});

app.get("/", async (req, res)=> {
	res.json({ status: "ArabKu API ready"})
});

