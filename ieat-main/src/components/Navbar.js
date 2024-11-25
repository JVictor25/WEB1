import { useAuthContext } from "../contexts/useAuthContext";

export function Navbar() {
  const { isLoggedIn, user, logout } = useAuthContext();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img className="logo" src="imgs/logo_escuro_1.png" alt="Logo" />
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 link-white">
            INÍCIO
          </a>
        </li>
        <li>
          <a href="sobre" className="nav-link px-2 link-white">
            SOBRE
          </a>
        </li>
        <li>
          <a href="cursos" className="nav-link px-2 link-white">
            CURSOS
          </a>
        </li>
        <li>
          <a href="docentes" className="nav-link px-2 link-white">
            DOCENTES
          </a>
        </li>
        <li>
          <a href="formTrabalheConosco" className="nav-link px-2 link-white">
            TRABALHE CONOSCO
          </a>
        </li>
        <li>
          <a href="formularioContato" className="nav-link px-2 link-white">
            CONTATO
          </a>
        </li>
        {isLoggedIn && (
          <li>
            <a href="aula" className="nav-link px-2 link-white">
              AULA
            </a>
          </li>
        )}
      </ul>

      {isLoggedIn ? (
        <div id="loggedin">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={logout}
            title={`Sair de ${user.email}`}
          >
            Sair
          </button>
          <a type="button" className="btn btn-secondary" href="cart">
            <img
              src="imgs/carrinho.png"
              width="24"
              height="24"
              alt="Carrinho de Compras"
            />
          </a>
        </div>
      ) : (
        <div id="login" className="col-md-3 text-end">
          <a
            type="button"
            className="btn btn-outline-primary me-2"
            href="login"
          >
            Login
          </a>
          <a type="button" className="btn btn-primary" href="formMatricula">
            Registrar-se
          </a>
        </div>
      )}
    </header>
  );
}
