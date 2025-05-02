const express = require("express");
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

require("./db/conn");

const port = process.env.PORT || 5000;

const cors = require('cors');
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

// ✅ Serve static files like sitemap.xml and robots.txt from backend/public
app.use(express.static(path.join(__dirname, 'public')));

const newsRouter = require("./routes/news");
const blogRouter = require("./routes/blog");
const singleBlogRouter = require("./routes/singleblog");
const workRouter = require("./routes/ourWorks");
const aboutUsRouter = require("./routes/aboutUs");
const servicesRouter = require("./routes/services");
const singleServicesRouter = require("./routes/singleservice");
const teamRouter = require("./routes/team");
const testimonialRouter = require("./routes/testimonial");
const productRouter = require("./routes/product");
const contactRouter = require("./routes/contact");
const planRouter = require("./routes/plan");
const faqRouter = require("./routes/faq");
const authRouter = require("./routes/authRoutes");
const paymentRouter = require("./routes/payment");

app.use(newsRouter);
app.use(blogRouter);
app.use(singleBlogRouter);
app.use(workRouter);
app.use(aboutUsRouter);
app.use(servicesRouter);
app.use(singleServicesRouter);
app.use(teamRouter);
app.use(testimonialRouter);
app.use(productRouter);
app.use(contactRouter);
app.use(planRouter);
app.use(faqRouter);
app.use(authRouter);

app.use(paymentRouter);


app.listen(port, () => {
  console.log(`Connection is setup at port ${port}`);

});
