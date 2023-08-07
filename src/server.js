import express from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import morgan from 'morgan';
import handlebars from 'express-handlebars'
import usersRouter from './routes/user.router.js'
import viewsRouter from './routes/views.router.js'
import './config/connection.js'
import {connectionString} from './config/connection.js'
import { __dirname } from './utils.js';

const app=express();
app.use(morgan('dev'));
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine',"handlebars")
app.use(express.static(__dirname+'/public'))


const mongoStoreOption={
    store:MongoStore.create({
            mongoUrl:connectionString,
            // crypto:{
            //     secret:'1234'
            // }
        }),
    secret:'1234',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60000
    }

}
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(session(mongoStoreOption));
app.use('/users',usersRouter)
app.use('/',viewsRouter)
app.listen(8080,()=>console.log("port 8080 ok"))