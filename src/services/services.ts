import axios from 'axios';
import { toast } from 'react-toastify';

import { SurveyResponseType } from '@/type/type';

export const getUsers = async (assesseeId: string, formId: string) => {
  const data = await axios.get(
    `http://localhost:3000/api/response-tracker/assessee/${assesseeId}/${formId}`
  );
  if (data.status === 200) {
    return data.data.data;
  } else {
    toast.error(data.data.message, { draggable: false });
  }
};

export const saveResponse = async (payload: SurveyResponseType) => {
  const data = await axios.patch(
    'http://localhost:3000/api/response-tracker',
    payload
  );
  if (data.status === 200) {
    return data.data.data;
  } else {
    toast.error(data.data.message, { draggable: false });
  }
};

export const getSurveyConfigQuestionById = async (id: string) => {
  const data = await axios(
    `http://localhost:3000/api/survey-form/latest-survey-form/${id}`
  );
  if (data.status === 200) {
    return data.data.data;
  } else {
    toast.error(data?.data?.message, { draggable: false });
  }
};
