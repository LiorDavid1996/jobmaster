require('dotenv').config();
require('express-async-errors');


const path = require('path');
// extra security packages
const cors = require('cors')
const helmet = require('helmet');
const xss = require('xss-clean');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1)
 app.use(cors());
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());
app.use(helmet());
app.get("/", (req, res)=> {
  res.send("Hello World!");
});
app.use(xss());

// routes
app.use('/api/auth', authRouter);
app.use('/api/jobs', authenticateUser, jobsRouter);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
      
    );
  } catch (error) {
    console.log(error);
  }
};

start();