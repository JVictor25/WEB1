import { useNavigate } from "react-router-dom";
import { addStudent } from "../../requests";
import "./index.css";

import React, { useState } from "react";

const FormMatricula = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tel1: "",
    tel2: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    genero: "",
    ehEspecial: "",
    requerAtendimentoEspecial: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Senhas não coincidem.");
      return;
    }

    formData.confirmPassword = undefined;

    addStudent(formData).then(() => navigate("/"));
    alert("Cadastrado com sucesso.");
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      email: "",
      tel1: "",
      tel2: "",
      cpf: "",
      rg: "",
      dataNascimento: "",
      genero: "",
      ehEspecial: "",
      requerAtendimentoEspecial: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form
      className="estilu"
      id="registerStudentForm"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <br />
      <div className="work">
        <h2>Matricule-se</h2>
        <br />
        <hr />
        <br />
      </div>
      <div className="form-group">
        <h3>Dados Pessoais:</h3>
      </div>
      <div className="form-group">
        <label htmlFor="nome">Nome:*</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-tel">Telefone 1:*</label>
        <input
          type="tel"
          name="tel1"
          id="i-tel"
          placeholder="00 00000-0000"
          value={formData.tel1}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-tel">Telefone 2:</label>
        <input
          type="tel"
          name="tel2"
          id="i-tel"
          placeholder="00 00000-0000"
          value={formData.tel2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:*</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="000.000.000-00"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rg">RG:*</label>
        <input
          type="text"
          id="rg"
          name="rg"
          placeholder="RG"
          value={formData.rg}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-date">Qual a data do seu nascimento?</label>
        <input
          type="date"
          name="dataNascimento"
          id="i-date"
          max="2021-11-03"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />
        <br />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="Genero">Gênero:</label>
        <select
          id="Genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div className="form-group">
        <label>É portador de alguma necessidade especial?*</label>
        <input
          type="radio"
          name="ehEspecial"
          value="especial"
          checked={formData.ehEspecial === "especial"}
          onChange={handleChange}
          required
        />{" "}
        Sim
        <input
          type="radio"
          name="ehEspecial"
          value="naoespecial"
          checked={formData.ehEspecial === "naoespecial"}
          onChange={handleChange}
        />{" "}
        Não
      </div>
      <div className="form-group">
        <label>Requer atendimento especial?*</label>
        <input
          type="radio"
          name="requerAtendimentoEspecial"
          value="requer"
          checked={formData.requerAtendimentoEspecial === "requer"}
          onChange={handleChange}
          required
        />{" "}
        Sim
        <input
          type="radio"
          name="requerAtendimentoEspecial"
          value="naorequer"
          checked={formData.requerAtendimentoEspecial === "naorequer"}
          onChange={handleChange}
        />{" "}
        Não
      </div>
      <div className="form-group">
        <label htmlFor="register-password">Senha:</label>
        <input
          type="password"
          id="register-password"
          name="password"
          placeholder="Sua senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-confirm-password">Confirme a Senha:</label>
        <input
          type="password"
          id="register-confirm-password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button className="benviar" type="submit">
        Enviar
      </button>
      <button className="blimpar" type="reset">
        Limpar
      </button>
      <hr />
      <br />
      <p>
        Já tem uma conta?{" "}
        <a id="fazer_login" href="login">
          Fazer login
        </a>
      </p>
    </form>
  );
};

export default FormMatricula;
