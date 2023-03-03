export default interface TodoOptions {
  handleDelete: (id: string) => void;
  handleDone: (id: string) => void;
  handleImportant: (id: string) => void;
}
