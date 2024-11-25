import { useAuthContext } from "../../contexts/useAuthContext";
import { getStudents, getTeachers } from "../../requests";
import "./index.css";

export default function Login() {
  const { isLoggedIn, user, login, logout } = useAuthContext();

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    Promise.all([getStudents(), getTeachers()]).then(
      ([studentsList, teachersList]) => {
        let user;
        let userType = "student";

        user = studentsList.find(
          ([_, student]) =>
            student.email === email && student.password === password
        );

        if (!user) {
          userType = "teacher";

          user = teachersList.find(
            ([_, teacher]) =>
              teacher.email === email && teacher.password === password
          );
        }

        if (!user) {
          alert("E-mail e/ou senha incorretos.");
          return;
        }

        login(
          user[0],
          user[1].email,
          user[1].nome,
          userType,
          user[1].boughtCourses
        );
        alert("Autenticado com sucesso!");
      }
    );
  }

  return (
    <>
      <div className="login-section">
        {!isLoggedIn ? (
          <>
            <h2>Login</h2>
            <form className="estilo" id="loginForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <br />
                <label for="login-email">E-mail:</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              <div className="form-group">
                <label for="login-password">Senha:</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  placeholder="Sua senha"
                  required
                />
              </div>
              <button className="benviar" type="submit">
                Enviar
              </button>
              <hr />
              <br />
              <p>
                Não tem uma conta?{" "}
                <a id="Registre-se" href="formMatricula">
                  Registre-se
                </a>
              </p>
            </form>
          </>
        ) : (
          <div id="loggedin" style={{ height: "40vh" }}>
            <p id="message" style={{ textAlign: "center", fontSize: "2rem" }}>
              Você já está logado como {user.name} ({user.email})!
            </p>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={logout}
            >
              Sair
            </button>

            <a id="aulaLink" href="aula" className="btn btn-primary">
              Ir para a aula
            </a>
          </div>
        )}
      </div>
    </>
  );
}
