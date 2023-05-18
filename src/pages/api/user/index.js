import { user } from "../../../data/user";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(user);
  } else if (req.method === "POST") {
    const userData = req.body.user;
    // console.log(userData);
    user.length = 0; // Clear the existing user array
    user.push(userData); // Add the new userData to the user array
    console.log("---- API -----");
    console.log(user);
    console.log("---- API -----");

    res.status(201).json(userData);
  }
}
