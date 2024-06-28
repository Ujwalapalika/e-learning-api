const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT, content TEXT, video_url TEXT, progress INTEGER)"
  );
  db.run(
    "CREATE TABLE discussions (id INTEGER PRIMARY KEY, course_id INTEGER, post TEXT)"
  );

  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 1', 'Content for course 2', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 2', 'Content for course 3', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 3', 'Content for course 4', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 4', 'Content for course 5', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 5', 'Content for course 6', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 6', 'Content for course 7', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 7', 'Content for course 8', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO courses (title, content, video_url, progress) VALUES ('Course 8', 'Content for course 9', 'https://youtu.be/jzNxXm5twx4?si=FlBBZCuGeillHg_q', 12)"
  );
  db.run(
    "INSERT INTO discussions (course_id, post) VALUES (1, 'First discussion post')"
  );
});

module.exports = db;
