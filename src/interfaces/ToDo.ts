export type ToDoListProps = {
  id?: number;
  title: string;
  startDate?: Date;
  endDate: string;
  description: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setDescription?: React.Dispatch<React.SetStateAction<string>>;
  setEndDate?: React.Dispatch<React.SetStateAction<string>>;
  homeStore?: any;
};
export type ToDoSetProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};
