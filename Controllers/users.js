import { v4 as uuidv4 } from "uuid";

//mock database
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  //const userWithID = { ...user, id: uuidv4() };
  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name "${user.firstName}" added to the database.`);
};

export const getUserWithId = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id "${id}" deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id "${id}" updated.`);
};
