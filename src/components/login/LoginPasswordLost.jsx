import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Buttons";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: email.value,
      url: window.location.href.replace("perdeu", "resetar"),
    });
    const { json } = await request(url, options);
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {loading ? (
            <Button>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
