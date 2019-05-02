var express = require('express');
var app = express();
var path = require('path');
const passportSetup = require('./config_passport/passport_setup')

// importing the routers.
const authRoutes = require('./routes/auth_route');

// setting up view engine.
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// setup routes.
app.use('/auth', authRoutes)


// create home route.
app.get('/', (req, res) => {
	res.render('home');
})


app.listen(4000, () => {
	console.log('listening on port 4000');
} )