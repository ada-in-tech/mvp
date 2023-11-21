const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const jobListingRoutes = require('./routes/jobListingRoutes');
const companyRoutes = require('./routes/companyRoutes');
const communityGroupRoutes = require('./routes/communityGroupRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// Middleware for JSON body parsing
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use('/workshops', workshopRoutes);
app.use('/joblistings', jobListingRoutes);
app.use('/companies', companyRoutes);
app.use('/communitygroups', communityGroupRoutes);
app.use('/resources', resourceRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/reports', reportRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
