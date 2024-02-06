import { IUserVideoPatch } from "./user.interface";

export interface IVideo extends IUserVideoPatch {
  _id?: string;
  video: string;
}
