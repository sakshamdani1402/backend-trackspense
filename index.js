
const connnectToMongo = require('./db');
const cors = require('cors');
const express = require('express')

const app = express();
connnectToMongo();
const port = process.env.PORT||5000;
app.use(express.json());
app.use(cors());
//Available routes
app.use('/auth',require('./routes/auth'));
app.use('/transactions',require('./routes/transactions'));
app.use('/saved', require('./routes/saved'));
app.get('/', (req,res) =>{
    res.send('app is running');
})
app.listen(port, () => {
    console.log(`iNotebook  backend listening at http://localhost:${port}`)
})
