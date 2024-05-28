import User from '../models/User'

export function test(req,res){
    console.log("lopy");
const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      passwords: "password123",
      location: "New York",
      occupation: "Software Engineer",
      viewedprofile: 0,
      impression: 0
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      passwords: "password456",
      location: "Los Angeles",
      occupation: "Product Manager",
      viewedprofile: 0,
      impression: 0
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      email: "bobsmith@example.com",
      passwords: "password789",
      location: "Chicago",
      occupation: "Data Analyst",
      viewedprofile: 0,
      impression: 0
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alicejohnson@example.com",
      passwords: "passwordabc",
      location: "San Francisco",
      occupation: "UX Designer",
      viewedprofile: 0,
      impression: 0
    },
    {
      firstName: "David",
      lastName: "Lee",
      email: "davidlee@example.com",
      passwords: "passworddef",
      location: "Seattle",
      occupation: "Full Stack Developer",
      viewedprofile: 0,
      impression: 0
    }
  ];
  
  User.create(users)
    .then(() => console.log("Users created successfully"))
    .catch((err) => console.error(err));
}
