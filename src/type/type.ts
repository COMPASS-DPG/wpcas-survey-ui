export type SurveyType = {
  id: string;
  name: string;
  role: string;
  providedFeedback: boolean;
  getFeedback: boolean;
  questions: string[];
};
