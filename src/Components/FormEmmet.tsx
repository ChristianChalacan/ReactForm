import React, { FormEvent } from "react";

type Props = {};

const FormEmmet = (props: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviando");
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input type="text" id="lastname" className="form-control" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default FormEmmet;
