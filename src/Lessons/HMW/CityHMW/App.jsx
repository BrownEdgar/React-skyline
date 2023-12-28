import React, { useState } from "react";
import * as Yup from "yup";
import { number, object, string } from "yup";

const usersData = [
  {
    id: 1,
    firt_name: "Sebastian",
    last_name: "Rodriges",
    addres: {
      street: "Halabyan",
      house: 54,
      city: "Yerevan",
    },
    age: 25,
    salary: 560_000,
    bestFriend: "Jhon",
  },
  {
    id: 2,
    firt_name: "Alice",
    last_name: "Wolstein",
    addres: {
      street: "Rindermarkt",
      house: 49,
      city: "Munich",
    },
    age: 22,
    salary: 2_200_000,
    bestFriend: "Adolph",
  },
  {
    id: 3,
    firt_name: "Babajanyan",
    last_name: "Ashot",
    addres: {
      street: "Ghapantsyan",
      house: 8,
      city: "Yerevan",
    },
    age: 21,
    salary: 260_000,
    bestFriend: "Davit",
  },
  {
    id: 4,
    firt_name: "Elizaveta",
    last_name: "Medvedeva",
    addres: {
      street: "Novokuznetskaya",
      house: 13,
      city: "Moscow",
    },
    age: 27,
    salary: 400_000,
    bestFriend: "Ekaterina",
  },
  {
    id: 5,
    firt_name: "Oda",
    last_name: "Eiichiro",
    addres: {
      street: "Tani Ya",
      house: 1,
      city: "Kumamoto",
    },
    age: 48,
    salary: 10_000_000,
    bestFriend: "Kubo",
  },
];

const validationSchema = Yup.object().shape({
  selectedCity: string().required("Please select a city"),
});

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{`Age: ${user.age}`}</p>
      <p>{`Address: ${user.address.street}, ${user.address.house}, ${user.address.city}`}</p>
      <p>{`Salary: ${user.salary}`}</p>
      <p>{`Best Friend: ${user.bestFriend}`}</p>
    </div>
  );
};

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [users, setUsers] = useState([...usersData]);

  const filteredUsers = users.filter(
    (user) => user.address.city === selectedCity
  );

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <form>
        <label htmlFor="citySelect">Select a City:</label>
        <select
          id="citySelect"
          name="city"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">Select a City</option>
          {Array.from(new Set(users.map((user) => user.address.city))).map(
            (city) => (
              <option key={city} value={city}>
                {city}
              </option>
            )
          )}
        </select>
      </form>
      <div className="user-list">
        {filteredUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
