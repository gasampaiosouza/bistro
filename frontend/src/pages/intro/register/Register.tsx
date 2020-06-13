import React, { useEffect, useState } from 'react';
import './register.scss';
import BackArrow from '../../../components/BackArrow';

import Input from '../../../components/Input';
import DefaultSelect from '../../../components/DefaultSelect';
import Button from '../../../components/Button';

export default function Register() {
  const [data, setData] = useState([]);

  useEffect(() => {
    type stateType = {
      nome: string;
    };

    const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    // { value: states.nome, label: states.nome }

    fetch(URL)
      .then((data) => data.json())
      .then((states) =>
        setData(
          states.map((state: stateType) => ({
            value: state.nome,
            label: state.nome,
          }))
        )
      );
  }, []);

  function handleSelect(value: object) {
    console.log(value);
  }

  return (
    <div className="container">
      <div className="form--container">
        <div className="top--container">
          <h2 className="title">
            Seja bem-vindo ao <span className="color">Bistrô</span>!
          </h2>

          <BackArrow path="/" />

          <h3 className="sub--title">Em relação a sua empresa...</h3>
        </div>

        <form action="/">
          <div className="inputTop--container">
            <Input placeholder="Qual é o nome?" type="text" />
            <Input placeholder="Pode nos dizer o email?" type="email" />
            <Input placeholder="E alguma senha para login?" type="password" />
            <Input placeholder="Pode confirmar a senha?" type="password" />
          </div>

          <div className="inputBottom--container">
            <Input placeholder="E o telefone?" type="tel" />
            <Input placeholder="CNPJ?" type="text" />
            <DefaultSelect
              placeholder="Onde a empresa fica?"
              options={data}
              callback={handleSelect}
            />
          </div>

          <Button text="Cadastrar-se" type="submit" />
        </form>
      </div>
    </div>
  );
}
