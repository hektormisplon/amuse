import passport from 'passport';
import passportFacebook from 'passport-facebook';
import passportGoogle from 'passport-google-oauth20';
import passportJWT from 'passport-jwt';
import * as passportLocal from 'passport-local';
import config from '../../../config';
import { User } from '../database';

const LocalStrategy = passportLocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

class AuthService {
    constructor() {
        this.initializeLocalStrategy();
        this.initializeJwtStrategy();
        this.initializeFacebookStrategy();
        this.initializeGoogleStrategy();
        passport.serializeUser((user, done) => {
            done(null, user);
        });
        passport.deserializeUser((user, done) => {
            done(null, user);
        });
        this.passport = passport;
    }

    initializeLocalStrategy = () => {
        passport.use(
            new LocalStrategy(
                {
                    usernameField: 'email',
                },
                async (email, password, done) => {
                    try {
                        const user = await User.findOne({
                            email,
                        });

                        if (!user) {
                            return done(null, false, { message: 'No user by that email' });
                        }

                        return user.comparePassword(password, (isMatch) => {
                            if (!isMatch) {
                                return done(null, false, {
                                    message: 'Please enter a valid password',
                                });
                            }
                            return done(null, user);
                        });
                    } catch (error) {
                        return done(error);
                    }
                },
            ),
        );
    };

    initializeJwtStrategy = () => {
        passport.use(
            new JwtStrategy(
                {
                    secretOrKey: config.auth.jwtSecret,
                    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                },
                (jwtPayload, done) => {
                    const { id } = jwtPayload;
                    User.findById(id, (err, user) => {
                        if (err) {
                            return done(err);
                        }
                        if (!user) {
                            return done(null, false);
                        }
                        return done(null, user);
                    });
                },
            ),
        );
    };

    initializeFacebookStrategy = () => {
        passport.use(
            new FacebookStrategy(
                {
                    clientID: config.auth.facebook.clientID,
                    clientSecret: config.auth.facebook.clientSecret,
                    callbackURL: 'http://localhost:3000/auth/facebook/callback',
                },
                (accessToken, refreshToken, profile, cb) => {
                    User.findOrCreate({ facebookId: profile.id }, (err, user) => cb(err, user));
                },
            ),
        );
    };

    initializeGoogleStrategy = () => {
        passport.use(
            new GoogleStrategy(
                {
                    clientID: config.auth.google.clientID,
                    clientSecret: config.auth.google.clientSecret,
                    callbackURL: 'http://www.example.com/auth/google/callback',
                },
                (accessToken, refreshToken, profile, cb) => {
                    User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user));
                },
            ),
        );
    };
}

export default AuthService;
