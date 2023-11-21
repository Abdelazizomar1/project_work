const UK = "USERS";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(UK)) || [];
  } catch {
    return [];
  }
}

function register(user) {
  let users = getUsers();
  let i = users.findIndex((u) => u.email === user.email);

  if (i !== -1) {
    // User already registered, show an error or handle accordingly
    alert("User with this email already exists.");
    return;
  }

  users.push(user);
  localStorage.setItem(UK, JSON.stringify(users));
  // Log the updated user data to the console
  console.log(users);

  alert("Registration successful!");
  // Redirect to login or another page
  window.location.href = "login.html";
}

// function login(email, password) {
//   let users = getUsers();
//   // let i = users.findIndex((u) => u.email === email && u.password === password);
//   // let i = users.findIndex((u) => (u.email === identifier || u.id === identifier) && u.password === password);
//   let i = users.findIndex((u) => (u.email === identifier || (u.id && u.id === identifier)) && u.password === password);

// function login(emailOrId, password) {
//   let users = getUsers();
//   let i = users.findIndex((u) => (u.email === emailOrId || (u.id && u.id === emailOrId)) && u.password === password);

// if (i === -1) {
//   // Incorrect email or password, show an error or handle accordingly
//   alert("Incorrect email or password.");
//   return;
// }

function login(email, password, id) {
  let users = getUsers();
  let i = users.findIndex((u) => (u.email === email || (u.id && u.id === id)) && u.password === password);

  if (i === -1) {
    // Incorrect email, ID, or password, show an error or handle accordingly
    alert("Incorrect email, ID, or password.");
    return;
}

  alert("Login successful!");
  // Redirect to home or another page
  window.location.href = "home.html";
}









