import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Table from "./components/section/Table";
import { Footer } from "./components/footer/footer";

const App = () => {
  const objUsers = [
    {
      name: "Mustafa",
      lastName: "Magometov",
      age: 18,
      id: 1,
    },
    {
      name: "Vahid",
      lastName: "Suleimanov",
      age: 18,
      id: 2,
    },
    {
      name: "Akim",
      lastName: "Shakeev",
      age: 18,
      id: 3,
    },
    {
      name: "Said",
      lastName: "Lansarov",
      age: 23,
      id: 3,
    },
  ];
  return (
    <div>
      <Navbar />{objUsers.map((item) => {
        return (
          <Table
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        );
      })};
      <Footer />
    </div>
  );
};


export default App;