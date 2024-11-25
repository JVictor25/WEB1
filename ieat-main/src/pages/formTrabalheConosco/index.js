import React from "react";
import "./index.css"; // ajuste os caminhos conforme necessário
import { addTeacher } from "../../requests";
import { useNavigate } from "react-router-dom";

const FormTrabalheConosco = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = Object.values(event.target);

    if (inputs[12].value !== inputs[13].value) {
      alert("Senhas não coincidem.");
      return;
    }

    const newUser = {
      nome: inputs[0].value,
      email: inputs[1].value,
      tel1: inputs[2].value,
      tel2: inputs[3].value,
      cpf: inputs[4].value,
      dataNascimento: inputs[5].value,
      genero: inputs[6].value,
      estadoCivil: inputs[7].value,
      temDeficiencia: inputs[8].checked,
      formacao: inputs[10].value,
      cargo: inputs[11].value,
      password: inputs[12].value,
    };

    addTeacher(newUser).then(() => navigate("/"));
    alert("Cadastrado com sucesso.");
  };
  return (
    <form className="estilu" id="registerTeacherForm" onSubmit={handleSubmit}>
      <br />
      <div className="work">
        <h2>Trabalhe Conosco</h2>
        <h4>
          Cadastre seu currículo e participe das nossas seleções para ser um dos
          nossos colaboradores
        </h4>
        <br />
        <hr />
        <br />
      </div>

      <div className="form-group">
        <label htmlFor="name">Nome:*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
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
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="i-tel">Telefone 1:*</label>
        <input
          type="tel"
          name="phone"
          id="i-tel"
          placeholder="99 99999-9999"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="i-tel2">Telefone 2:</label>
        <input
          type="tel"
          name="phone"
          id="i-tel2"
          placeholder="99 99999-9999"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cpf">CPF:*</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="000.000.000-00"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="i-date">Qual a data do seu nascimento?</label>
        <input type="date" name="bday" id="i-date" max="2021-11-03" />
        <br />
        <br />
      </div>

      <div className="form-group">
        <label htmlFor="Genero">Gênero:</label>
        <select id="Genero" name="Genero">
          <option value="" selected disabled hidden>
            Selecione
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="estado">Estado Civil:*</label>
        <select id="estado" name="estado" required>
          <option value="" selected disabled hidden>
            Selecione
          </option>
          <option value="Solteiro(a)">Solteiro(a)</option>
          <option value="Casado(a)">Casado(a)</option>
          <option value="Viuvo(a)">Viuvo(a)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="def">Possui alguma deficiência?*</label>
        <input type="radio" name="def" value="possuidef" required /> Sim
        <input type="radio" name="def" value="naopossuidef" /> Não
      </div>

      <div className="form-group">
        <label htmlFor="formacao">Formação:</label>
        <select id="formacao" name="formacao">
          <option value="" selected disabled hidden>
            Selecione
          </option>
          <option value="Ensino Fundamental Incompleto">
            Ensino Fundamental Incompleto
          </option>
          <option value="Ensino Fundamental Cursando">
            Ensino Fundamental Cursando
          </option>
          <option value="Ensino Fundamental Completo">
            Ensino Fundamental Completo
          </option>
          <option value="Ensino Médio Incompleto">
            Ensino Médio Incompleto
          </option>
          <option value="Ensino Médio Cursando">Ensino Médio Cursando</option>
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>
          <option value="Ensino Técnico Incompleto">
            Ensino Técnico Incompleto
          </option>
          <option value="Ensino Técnico Cursando">
            Ensino Técnico Cursando
          </option>
          <option value="Ensino Técnico Completo">
            Ensino Técnico Completo
          </option>
          <option value="Ensino Superior Incompleto">
            Ensino Superior Incompleto
          </option>
          <option value="Ensino Superior Cursando">
            Ensino Superior Cursando
          </option>
          <option value="Ensino Superior Completo">
            Ensino Superior Completo
          </option>
          <option value="MBA">MBA</option>
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado">Doutorado</option>
          <option value="Pós Graduação">Pós Graduação</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cargo">Cargo Pretendido:*</label>
        <select id="cargo" name="cargo" required>
          <option value="" selected disabled hidden>
            Selecione
          </option>
          <option value="Professor de Lógica de Programação">
            Professor de Lógica de Programação
          </option>
          <option value="Professor especialista em IOT">
            Professor especialista em IOT
          </option>
          <option value="Professor especialista em IA">
            Professor especialista em IA
          </option>
          <option value="Auxiliar Administrativo">
            Auxiliar Administrativo
          </option>
          <option value="Estágio em atendimento ao cliente">
            Estágio em atendimento ao cliente
          </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="register-password">Senha:</label>
        <input
          type="password"
          id="register-password"
          name="password"
          placeholder="Sua senha"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="register-confirm-password">Confirme a Senha:</label>
        <input
          type="password"
          id="register-confirm-password"
          name="confirm-password"
          placeholder="Confirme sua senha"
          required
        />
      </div>

      <button className="benviar" type="submit">
        Enviar
      </button>
      <button className="blimpar" type="reset">
        Limpar
      </button>
    </form>
  );
};

export default FormTrabalheConosco;
