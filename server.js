const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/courses", (req, res) => {
  db.all("SELECT * FROM courses", [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

app.get("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;
  db.get("SELECT * FROM courses WHERE id = ?", [courseId], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(row);
  });
});

app.get("/api/courses/:id/discussions", (req, res) => {
  const courseId = req.params.id;
  db.all(
    "SELECT * FROM discussions WHERE course_id = ?",
    [courseId],
    (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.json(rows);
    }
  );
});

app.post("/api/courses/:id/discussions", (req, res) => {
  const courseId = req.params.id;
  const post = req.body.post;
  db.run(
    "INSERT INTO discussions (course_id, post) VALUES (?, ?)",
    [courseId, post],
    function (err) {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
