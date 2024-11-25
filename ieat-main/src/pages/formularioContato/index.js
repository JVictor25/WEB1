import './index.css'
import React, { useState } from 'react';

const FormularioContato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, message });
  };

  return (
    <form className='estile' onSubmit={handleSubmit}>
      <div className="form-group">
      <div className="work">
      <h2>Fale Conosco</h2>
      <h6>Possui alguma dúvida? Uma sugestão? Fale conosco! Mande uma mensagem</h6>
      <br></br>
      <hr></hr>
    </div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
          placeholder="00 00000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="whatsapp">Este número é WhatsApp?</label>
        <input
          type="radio"
          id="whatsappYes"
          name="whatsapp"
          value="yes"
          checked={phone.includes('whatsapp')}
          readOnly
        />
        Sim
        <input
          type="radio"
          id="whatsappNo"
          name="whatsapp"
          value="no"
          checked={!phone.includes('whatsapp')}
          readOnly
        />
        Não
      </div>
      <div className="form-group">
        <label htmlFor="message">Deixe aqui sua mensagem:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="sendButton">Enviar</button>
      <button type="reset" className="clearButton">Limpar</button>
    </form>
  );
};
export default FormularioContato;