import { ISubject } from "./subject.interface";

export interface IBook {
    _id?: string;
    title: string;
    author: string;
    description: string;
    isActive: boolean;
    thumbNail: string;
    subjects: string[] | ISubject[];
  }
  