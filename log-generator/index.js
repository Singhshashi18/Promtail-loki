 
const fs = require('fs'); 
const path = require('path');

const logPath = path.join(__dirname, '../logs/app.log');

function writeLog() {
  const timestamp = new Date().toISOString();
  const levels = ['INFO', 'WARN', 'ERROR'];
  const level = levels[Math.floor(Math.random() * levels.length)];
  const message = `[${level}] ${timestamp} — Custom log message`;

  fs.appendFileSync(logPath, message + '\n');
  console.log('Log written:', message);
}

setInterval(writeLog, 5000); 
