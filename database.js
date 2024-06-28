const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT, content TEXT, video_url TEXT, progress INTEGER)");
  db.run("CREATE TABLE discussions (id INTEGER PRIMARY KEY, course_id INTEGER, post TEXT)");

  db.run("INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 1', 'Content for course 1', 'https://www.example.com/video1.mp4', 12)");
  db.run("INSERT INTO discussions (course_id, post) VALUES (1, 'First discussion post')");
});

module.exports = db;

