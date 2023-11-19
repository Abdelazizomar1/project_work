// Your JavaScript code here

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

function login(email, password) {
  let users = getUsers();
  let i = users.findIndex((u) => u.email === email && u.password === password);

  if (i === -1) {
    // Incorrect email or password, show an error or handle accordingly
    alert("Incorrect email or password.");
    return;
  }

  alert("Login successful!");
  // Redirect to home or another page
  window.location.href = "home.html";
}
