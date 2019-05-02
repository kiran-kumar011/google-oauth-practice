const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys')

passport.use(
	new GoogleStrategy({
	// options for strategy.
	callbackURL: "/auth/google/redirect",
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
	console.log(profile)
	// User.findOrCreate({ googleId: profile.id }, function(err, user) {
 //    return done(err, user);
 //  });
})
)
