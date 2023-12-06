import axios from 'axios';

import { SurveyResponseType } from '@/type/type';

const backendUrl = 'http://3cp.compass.samagra.io';
export const getUsers = async (assesseeId: string) => {
  const data = await axios.get(
    `${backendUrl}/api/response-tracker/assessor/${assesseeId}`
  );
  return data.data.data;
};

export const saveResponse = async (payload: SurveyResponseType) => {
  const data = await axios.patch(`${backendUrl}/api/response-tracker`, payload);
  return data.data.data;
};

export const getSurveyConfigQuestionById = async (id: string) => {
  const data = await axios(
    `${backendUrl}/api/survey-form/latest-survey-form/${id}`
  );
  return data.data.data;
};
