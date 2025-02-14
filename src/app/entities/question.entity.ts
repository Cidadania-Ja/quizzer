export interface Question {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  required?: boolean;
  components?: QuestionComponents;
}

export interface QuestionComponents {
  select?: SelectComponent;
  text_input?: TextInputComponent;
  toggle?: ToggleComponent;
  textarea?: TextAreaComponent;
}

export interface SelectComponent {
  id: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options: QuestionOptions[];
}

export interface TextInputComponent {
  id: string;
  label: string;
  placeholder?: string;
  required: boolean;
}

export interface ToggleComponent {
  id: string;
  label: string;
}

export interface TextAreaComponent {
  id: string;
  label: string;
  placeholder?: string;
}

export interface QuestionOptions {
  id: string;
  label: string;
}
