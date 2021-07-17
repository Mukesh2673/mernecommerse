import express from 'express';
import   mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
});


app.use('/api/users',userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal',(req,res) =>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get('/',(req,res)=>{
  /* we use a handler for this path to response  handler accept two parameter req and res server */
    res.send('server is ready');
    });
    const port = process.env.PORT || 5000;
/*     use port number from environment variable to read the environment we type this if it does not exist then it will use port 5000
 */    app.listen(port,() =>{
      console.log(`Serve at http://localhost:${port}`);
    })
app.use((err, req, res, next) =>{
    res.status(500).send({message:err.message});
});  

/* ` backtick are used to defined template  literal template literals
 are a new feature in ECMAScript 6 to make working with strings easier.
  Features: we can interpolate any kind of expression in the template literals
  Template literals are string literals allowing embedded expressions.
  You can use multi-line strings and string interpolation features with them.
  syntax
  `string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
*/