import { API_BASE_URL } from "./utils";

export async function getStudents() {
  const res = await fetch(`${API_BASE_URL}/students.json`);
  const students = await res.json();
  return Object.entries(students);
}

export async function getTeachers() {
  const res = await fetch(`${API_BASE_URL}/teachers.json`);
  const teachers = await res.json();
  return Object.entries(teachers);
}

export async function addStudent(newUser) {
  const res = await fetch(`${API_BASE_URL}/students.json`, {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  return res;
}

export async function addTeacher(newUser) {
  const res = await fetch(`${API_BASE_URL}/teachers.json`, {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  return res;
}

export async function addCoursesToStudent(id, courses) {
  try {
    const response = await fetch(`${API_BASE_URL}/students/${id}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        boughtCourses: courses,
      }),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response;
  } catch (error) {
    console.error("Failed to edit student:", error);
  }
}

export const fetchComments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments.json`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    if (!data) return [];
    const commentsArray = Object.keys(data).map((key) => ({
      id: key,
      id_do_aluno: data[key].id_do_aluno,
      comentario: data[key].comentario,
    }));

    return commentsArray;
  } catch (error) {
    console.error("Failed to fetch comments:", error);
  }
};

export const addComment = async (comment) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error("Network response was not ok");

    return response;
  } catch (error) {
    console.error("Failed to add comment:", error);
  }
};

export const editComment = async (id, updatedComment) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments/${id}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedComment),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response;
  } catch (error) {
    console.error("Failed to edit comment:", error);
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments/${id}.json`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response;
  } catch (error) {
    console.error("Failed to delete comment:", error);
  }
};
