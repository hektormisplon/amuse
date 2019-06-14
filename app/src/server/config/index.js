/*
Import the external libraries:
- dotenv
*/
import dotenv from 'dotenv';
import os from 'os';

// Activatie the dotenv settings from .env file
dotenv.config();

// Find external ip adress
let address = null;
const ifaces = os.networkInterfaces();
for (const dev in ifaces) {
    const iface = ifaces[dev].filter(info => info.family === 'IPv4' && info.internal === false);
    if (iface.length) address = iface[0].address;
}

// Create configuration object
const config = {
    nodeEnvironment: process.env.NODE_ENV,
    // nodeHostname: process.env.NODE_SERVER_HOSTNAME,
    address,
    nodePort: process.env.NODE_SERVER_PORT,
    mongoDbConnectionstring: process.env.MONGODB_CONNECTION,
    auth: {
        bcrypt: {
            saltWorkFactor: process.env.AUTH_BCRYPT_SALT,
        },
        jwtSecret: process.env.AUTH_JWT_SECRET,
        jwtSession: {
            session: process.env.AUTH_JWT_SESSION,
        },
        facebook: {
            clientID: process.env.AUTH_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET,
        },
        google: {
            clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
        },
    },
};

export default config;
