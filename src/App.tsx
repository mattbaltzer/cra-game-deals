import React, { ComponentProps } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Input } from "reactstrap";
import logo from "./logo.svg";
import Layout from "./layout";
//import './App.css';

interface GameInputProps {
  name: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  type: ComponentProps<typeof Input>["type"];
}

class GameInput extends React.Component<GameInputProps> {
  render() {
    return (
      <Layout>
        <div>
          <header>
            <h1>Game Deals Search</h1>
          </header>
        </div>
        <div>
          <Input
            name={this.props.name}
            label={this.props.label}
            placeholder={this.props.placeholder}
            type={this.props.type}
          />
        </div>
      </Layout>
    );
  }
}
export default GameInput;
