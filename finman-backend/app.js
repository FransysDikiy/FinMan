const express = require('express');
const bodyParser = require('body-parser');
const financialRoutes = require('./routes/financialRoutes');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.get("/health", (req, res, next) =>{
    res.send("<h1>Service is OK!</h1>");
});

app.use('/api/operations', financialRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

