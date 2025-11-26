export default interface Note {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  tag: string[];
}
