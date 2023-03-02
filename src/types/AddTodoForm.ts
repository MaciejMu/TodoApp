export default interface TodoForm {
  todo: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (e: React.SyntheticEvent) => void;
}
