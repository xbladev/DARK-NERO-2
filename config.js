const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'GENUX-08a1ce',
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || ['94764497078'],
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://exekieligop:ul8XnJl05zUDHrEu@sandaru.tc3wtqw.mongodb.net',
};
