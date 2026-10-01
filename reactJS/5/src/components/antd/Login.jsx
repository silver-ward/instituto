import React from "react";

import{
  Card,
  Space
} from "antd";

import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";

export default function Login() {

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <Card
        style={{width: 360}}
        variant="outlined"
      >

        <LabelTitle texto="Login" />

        <Space
          orientation="vertical"
          style={{width:"100%"}}
          size="middle"
        >

          <div>
            <Label texto="Usuário:" />
            <InputText placeholder="digite aqui o usuário" />
          </div>

          <div>
            <Label texto="Senha:" />
            <InputPassword placeholder="digite aqui a senha" />
          </div>

          <Button valor="Logar" />

        </Space>
      </Card>

    </div>
  );
}