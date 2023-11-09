import axios from 'axios';
import { toast } from 'react-toastify';

import { SurveyResponseType } from '@/type/type';

export const getUsers = async () => {
  const data = await axios.get(
    'http://localhost:3000/api/response-tracker/assessee/abaa7220-5d2e-4e05-842a-95b2c4ce1876/2'
  );
  if (data.status === 200) {
    return data.data;
  } else {
    toast.error('something went wrong');
  }
};

export const saveResponse = async (data: SurveyResponseType) => {
  const res = await axios.post(
    'http://localhost:3000/api/response-tracker',
    data
  );
  // console.log('resonse',res)
  if (res.status === 200) {
    return res.data;
  } else {
    toast.error('something went wrong');
  }
};

export const getSurveyConfigQuestionById = async (id: string) => {
  try {
    const data = await axios(
      `http://localhost:3000/api/survey-form/latest-survey-form/${id}`
    );
    if (data.status === 200) {
      return data.data.data;
    } else {
      toast.error('something went wrong');
    }
  } catch (error) {
    toast.error('something went wrong');
  }
};
