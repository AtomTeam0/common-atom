import { IChapter } from "./chapter.interface";

export interface IDocument {
  _id?: string;
  pdf: string;
  chapters?: string[] | IChapter[];
}
