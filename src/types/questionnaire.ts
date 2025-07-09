export interface QuestionOption {
  label: string;
  value: string;
  points?: number;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  section: number;
}

export interface QuestionnaireSection {
  id: number;
  title: string;
  subtitle: string;
  questionCount: number;
}

export interface QuestionnaireData {
  sections: QuestionnaireSection[];
  questions: Question[];
}

export interface AnswerData {
  [key: string]: string;
}

export interface SubmissionData extends AnswerData {
  industry: string;
  email: string;
  timestamp: string;
}