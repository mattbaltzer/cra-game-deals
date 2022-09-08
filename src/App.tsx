import React, { ComponentProps } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Input } from "reactstrap";
import logo from "./logo.svg";
import Layout from "./layout";
import Box from "./box";
//import './App.css';

function App() {
  return (
    <Layout>
      <div>
        <header>
          <h1>Game Deals Search</h1>
        </header>
      </div>
      <div>
        <Box />
      </div>
    </Layout>
  );
}

export default App;
