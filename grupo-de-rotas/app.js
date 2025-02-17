const express = require('express');
const app = express();
const userRouter = require('./userRoutes');
const postRouter = require('./postRoutes');

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(3000, () => {
   console.log('Servidor em execução em http://localhost:3000/');
});