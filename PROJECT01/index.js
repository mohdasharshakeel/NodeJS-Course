const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // yahan u ya user, kuch bhi naam chalega — bas andar wahi naam use karo
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);
});

// app.get("/users", (req, res) => {
//   const html = `
//     <ul>
//         ${users
//           .map((user) => `<li>${user.first_name} ${user.last_name}</li>`)
//           .join("")}
//     </ul>
//     `;
//   res.send(html);
// });


//! POST route
app.post('/api/users', (req, res) => {

  //TODO :- create new user

  return res.json({ status: "pending" })
  
})

//! PATCH route
app.patch("/api/users/:id", (req, res) => {
  //TODO :- edit the user with id

  return res.json({ status: "pending" });
});



app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
