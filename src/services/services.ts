import { wpcasBackendUrl } from '@root/config';
import axios from 'axios';

import { SurveyResponseType } from '@/type/type';

export const getUsers = async (assesseeId: string) => {
  const data = await axios.get(
    `${wpcasBackendUrl}/api/response-tracker/assessor/${assesseeId}`
  );
  return data.data.data;
};

export const saveResponse = async (payload: SurveyResponseType) => {
  const data = await axios.patch(
    `${wpcasBackendUrl}/api/response-tracker`,
    payload
  );
  return data.data.data;
};

export const getSurveyConfigQuestionById = async (id: string) => {
  const data = await axios(
    `${wpcasBackendUrl}/api/survey-form/latest-survey-form/${id}`
  );
  return data.data.data;
};
