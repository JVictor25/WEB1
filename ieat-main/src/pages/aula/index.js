import React, { useState, useEffect } from "react";
import QuestionForm from "../../components/QuestionForm";
import CommentList from "../../components/CommentList";
import AulaView from "../../components/AulaView";
import "./index.css";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useNavigate } from "react-router-dom";
import {
  addComment,
  deleteComment,
  editComment,
  fetchComments,
} from "../../requests";

function Aula() {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuthContext();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      alert("Você precisa estar logado para acessar as aulas.");
    }
    getComments();
  }, [isLoggedIn, navigate]);

  async function getComments() {
    const comments = await fetchComments();
    if (!comments) setComments([]);
    setComments(comments);
  }

  function handleAddComment(text) {
    console.log(text);
    addComment(text).then(async (res) => {
      const id = (await res.json()).name;
      setComments((prev) => [
        ...prev,
        { id, id_do_aluno: user.id, comentario: text.comentario },
      ]);
    });
  }

  function handleEditComment(id, newText) {
    editComment(id, newText).then(() =>
      setComments((prev) => [
        ...prev.filter((c) => c.id !== id),
        { id, id_do_aluno: user.id, comentario: newText.comentario },
      ])
    );
  }

  function handleDeleteComment(id) {
    deleteComment(id).then(() =>
      setComments((prev) => prev.filter((c) => c.id !== id))
    );
  }

  return (
    <>
      <AulaView />

      <div className="container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="geral-tab"
              data-bs-toggle="tab"
              href="#geral"
              role="tab"
              aria-controls="geral"
              aria-selected="true"
            >
              Visão geral
            </button>
            <button
              className="nav-link"
              id="observ-tab"
              data-bs-toggle="tab"
              href="#observ"
              role="tab"
              aria-controls="observ"
              aria-selected="false"
            >
              Observações
            </button>
            <button
              className="nav-link"
              id="question-tab"
              data-bs-toggle="tab"
              href="#question"
              role="tab"
              aria-controls="question"
              aria-selected="false"
            >
              Perguntas
            </button>
          </div>
        </nav>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="geral"
            role="tabpanel"
            aria-labelledby="geral-tab"
          >
            <h3>
              Curso de Análise de Redes - redes de pequeno mundo, círculos
              sociais ou redes sem escala
            </h3>
            <h4>Descrição</h4>
            <p>
              A análise de rede - assim como sua prima próxima, análise de
              tráfego -, tem uso significativo em atividades de inteligência e
              contra-inteligência, envolvendo interceptação de comunicações em
              redes militares e terroristas, mas também pode ser usada para
              analisar difusão de epidemias.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="observ"
            role="tabpanel"
            aria-labelledby="observ-tab"
          >
            <div className="d-flex align-items-start mb-2">
              <img
                src="imgs/prof.png"
                alt="Professor Icon"
                className="user-icon me-2"
              />
              <div>
                <h5 className="mb-1">Professor</h5>
                <p className="mb-1">
                  Esta é uma observação do professor sobre o conteúdo da aula.
                  Preste atenção aos detalhes mencionados.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="question"
            role="tabpanel"
            aria-labelledby="question-tab"
          >
            <QuestionForm addComment={handleAddComment} />
            <CommentList
              comments={comments}
              editComment={handleEditComment}
              deleteComment={handleDeleteComment}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aula;
