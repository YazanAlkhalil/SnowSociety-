import React, { useState } from "react";
import "./singnup.css";

const RegistrationForm = () => {
  const formData = new FormData();
  formData.append('image', file);

  
  const [picturepath, setpicturepath] = useState(nulll);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [passwords, setpasswords] = useState("");
  const [location, setlocation] = useState("");
  const [occupation, setoccupation] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        passwords,
        location,
        occupation,
        picturepath
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="app">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input
              class="input"
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              class="input"
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            class="input"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            class="input"
            type="password"
            value={passwords}
            onChange={(e) => setpasswords(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            class="input"
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          <span>Location</span>
        </label>
        <label>
          <input
            class="input"
            type="text"
            p
            value={occupation}
            onChange={(e) => setoccupation(e.target.value)}
          />
          <span>Occupation</span>
        </label>

        <label>
        <input type="file" onChange={handleFileChange} />
        </label>

      
        <button class="submit">Submit</button>
        <p class="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
