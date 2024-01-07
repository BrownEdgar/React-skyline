import React, { useState } from "react";
import { object as yupObject, string } from "yup";

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
  id: number().required(),
  first_name: string().required(),
  last_name: string().required(),
  address: object().shape({
    street: string().required(),
    house: number().required(),
    city: string().required(),
  }),
  age: number().required(),
  salary: number().required(),
  bestFriend: ring().required(),
});

export default function App() {
  const [users, setUsers] = useState([...usersData]);

  return <div className="App"></div>;
}
