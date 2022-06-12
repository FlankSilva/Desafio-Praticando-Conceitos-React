export interface Data {
  id?: string;
  description?: string;
  isComplete?: boolean;
}

export interface PropsData {
  data: Data[];
}

export interface FormProps {
  task: string;
  setTask: (e: string) => void;
}