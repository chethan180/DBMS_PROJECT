import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import hst from "./routes/hst.js";
import smess from "./routes/smess.js";
import supd from "./routes/supd.js";
import whst from "./routes/whst.js";
import wupd from "./routes/wupd.js";
import Auth from './routes/auth.js';
import feed from "./routes/feed.js";
import solv from './routes/solv.js';
import allot from './routes/allot.js';
import em from './routes/em.js';
import out from './routes/outpass.js'

import dotenv from 'dotenv';
dotenv.config();

let user = process.env.SECRET_MONGO_USER;
let pswrd = process.env.SECRET_MONGO_PSWD;

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/hst',hst);
app.use('/smess',smess);
app.use('/supd',supd);
app.use('/whst',whst);
app.use('/wupd',wupd);
app.use('/auth',Auth);
app.use('/feed',feed);
app.use('/solv' ,solv);
app.use('/allot',allot);
app.use('/empty',em);
app.use('/out',out);

const CONNECTION_URL = `mongodb+srv://${user}:${pswrd}@cluster0.p6xod.mongodb.net/Student?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);