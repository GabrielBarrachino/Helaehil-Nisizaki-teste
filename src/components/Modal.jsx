import { useState } from "react";
import Input from "../components/Input";
import CloseMobile from "../assets/images/close.svg";
import PropTypes from 'prop-types';

function Modal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center font-inter">
      <div className="fixed left-0 top-0 z-0 h-full w-full bg-zinc-400 bg-opacity-50" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-[90%] bg-[#fafafa] h-max py-12 px-8 lg:p-16 rounded-xl sm:max-w-md">
        <div className="absolute right-4 top-3 rounded-[50%] bg-brand-neutral-100 p-2.5 cursor-pointer" onClick={onClose}>
          <img src={CloseMobile} alt="Ícone de fechar modal" />
        </div>
        <div className="text-center mb-6">
          <p className="text-2xl text-brand-primary-700 font-semibold p-3">Entrar</p>
          <p className="text-brand-neutral-700 text-sm">Acesse a plataforma com o login e senha</p>
        </div>
        <form>
          <Input
            id="email"
            label="Email"
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={handleChange}
            required
          />
          <div className="mt-4">
            <Input
              id="password"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
            <a href="#" className="mt-3 block text-brand-primary-500 font-semibold text-sm">Esqueceu sua senha?</a>
          </div>

          <button type="submit" className="w-full rounded-2xl bg-brand-primary-500 px-[40px] py-[14px] font-inter text-brand-neutral-50 mt-10">Entrar</button>
        </form>
      </div>
    </div>
  );
}


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;