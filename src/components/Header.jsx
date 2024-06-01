import { useState } from "react";
import ImageLogo from "../assets/images/logo.svg";
import MenuMobile from "../assets/images/menuMobile.svg";
import CloseMobile from "../assets/images/close.svg";
import Modal from "./Modal";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    if(isMenuOpen) {
      setIsMenuOpen(false)
    }
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <header className="px-4">
        <div className="container mx-auto flex items-center justify-between py-6 lg:py-12">
          <div>
            <a href="/">
              <img src={ImageLogo} alt="Imagem da logo" className="w-20 lg:w-28" />
            </a>
          </div>
          <nav className="lg:flex lg:items-center lg:gap-11">
            <ul className="hidden lg:flex lg:gap-11">
              <li>
                <a href="#" className="font-inter text-brand-neutral-600">
                  História
                </a>
              </li>
              <li>
                <a href="#" className="font-inter text-brand-neutral-600">
                  Contato
                </a>
              </li>
            </ul>
            <button className="lg:hidden" onClick={toggleMenu}>
              <img src={MenuMobile} alt="Ícone do menu mobile" />
            </button>
            <button className="hidden rounded-2xl bg-brand-primary-500 px-[40px] py-[14px] font-inter text-brand-neutral-50 transition-colors duration-300 ease-in-out hover:bg-brand-primary-700 hover:text-white lg:block" onClick={openModal}>
              Entrar
            </button>
          </nav>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-full transition-colors duration-300 ease-in-out">
          <div
            className="fixed right-0 top-0 z-[-1] h-full w-full bg-zinc-400 bg-opacity-50"
            onClick={toggleMenu}
          ></div>
          <aside className="fixed right-0 top-0 h-full w-9/12 bg-white">
            <div className="relative p-7">
              <div
                className="absolute right-7 rounded-[50%] bg-brand-neutral-100 p-2.5"
                onClick={toggleMenu}
              >
                <img src={CloseMobile} alt="Ícone para fechar o menu" />
              </div>
              <ul className="mb-10 mt-16 flex flex-col items-end gap-3 lg:gap-11">
                <li>
                  <a href="#" className="font-inter text-xl text-brand-neutral-600">
                    História
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-xl text-brand-neutral-600">
                    Contato
                  </a>
                </li>
              </ul>
              <button className="w-full rounded-2xl bg-brand-primary-500 px-[40px] py-[14px] font-inter text-brand-neutral-50" onClick={openModal}>
                Entrar
              </button>
            </div>
          </aside>
        </div>
      )}

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default Header;
