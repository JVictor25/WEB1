import React, { useState } from "react";
import { useAuthContext } from "../contexts/useAuthContext";

const QuestionForm = ({ addComment }) => {
  const { user } = useAuthContext();
  const [questionText, setQuestionText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (questionText.trim()) {
      addComment({ id_do_aluno: user.id, comentario: questionText });
      setQuestionText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control mb-2"
        placeholder="Digite sua pergunta..."
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Enviar Pergunta
      </button>
    </form>
  );
};

export default QuestionForm;
