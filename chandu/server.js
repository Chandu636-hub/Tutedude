const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(todoRoutes);
