import {Corp} from "../enums/Corp";

export interface IBook {
    _id?: string;
    title: string;
    priority: number;
    length: number;
    isActive: boolean;
    updatedAt: Date;
    createdAt: Date;
    pdf: string;
    thumbNail: string;
    corp: string | Corp
  }
  