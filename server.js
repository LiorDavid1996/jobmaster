require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
app.use(express.json())
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
app.get('/',(req,res)=>{
    res.send('job api')
})
const port = process.env.PORT || 5000;
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobsRouter);
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
       console.log(`Server is listening on port ${port}...`)
);
    } catch (error) {
        console.log(error);
    }
}
start()
