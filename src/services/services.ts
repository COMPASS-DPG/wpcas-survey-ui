import axios from 'axios';

import { SurveyResponseType } from '@/type/type';

export const getUsers = async (assesseeId: string) => {
  const data = await axios.get(
    `http://localhost:3000/api/response-tracker/assessor/${assesseeId}`
  );
  return data.data.data;
};

export const saveResponse = async (payload: SurveyResponseType) => {
  const data = await axios.patch(
    'http://localhost:3000/api/response-tracker',
    payload
  );
  return data.data.data;
};

export const getSurveyConfigQuestionById = async (id: string) => {
  const data = await axios(
    `http://localhost:3000/api/survey-form/latest-survey-form/${id}`
  );
  return data.data.data;
};
