import React, { ComponentProps } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Input } from "reactstrap";

interface Box {
  name: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  type: ComponentProps<typeof Input>["type"];
}

class Box extends React.Component<Box, {}> {
  render() {
    return (
      <div>
        <Input
          name={this.props.name}
          label={this.props.label}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default Box;
