export const getUsers = async () => {
  const data = await fetch(' http://localhost:8080/survey-configuration');
  const res = data.json();
  return res;
};

export const getSurveyConfigQuestionById = async (id: string) => {
  const data = await fetch(`http://localhost:8080/survey-configuration/${id}`);
  const res = data.json();
  return res;
};
