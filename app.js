const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const financialRoutes = require('./routes/financialRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'  // Specify to only allow your frontend
}));
app.use(bodyParser.json());
app.use('/api/operations', financialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

