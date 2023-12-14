import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Buttons";

const LoginPasswordReset = () => {
  return (
    <section>
      <h1 className="title">Resete a senha</h1>
      <Input label="Nova senha" />
      <Button>Enviar email</Button>
    </section>
  );
};

export default LoginPasswordReset;
