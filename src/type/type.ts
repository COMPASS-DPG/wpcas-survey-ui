type AssesseeType = {
  designation: string;
  userName: string;
  profilePicture: string;
};

export type SurveyType = {
  id: string;
  surveyFormId: string;
  assesseeId: string;
  assessorId: string;
  status: 'PENDING' | 'COMPLETED';
  Assessee: AssesseeType;
  surveyForm: {
    SurveyConfig: {
      endTime: Date;
    };
  };
};

export type SurveyFormType = {
  id: string;
  UserMetadata: {
    designation: string;
    userName: string;
    userId: string;
    profilePicture: string;
  };
  questionsJson: {
    questionId: string;
    question: string;
  }[];
};

export type SurveyResponseType = {
  surveyFormId: number;
  assesseeId: string;
  assessorId: string;
  responseJson: {
    questionId: string;
    answer: string;
  }[];
};
