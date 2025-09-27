const db = require('../database');
const Session = require('../models/session');

function createSession(projectPath) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO sessions (project_path) VALUES (?)`;
    db.run(sql, [projectPath], function (err) {
      if (err) {
        return reject(err);
      }
      resolve(new Session(this.lastID, projectPath, new Date().toISOString()));
    });
  });
}

module.exports = { createSession };
