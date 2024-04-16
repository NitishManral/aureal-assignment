const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/books', bookRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
