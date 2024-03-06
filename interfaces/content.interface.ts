import { ContentType } from "../enums/ContentType";
import { IItem } from "./item.interface";
import { IDocument } from "./document.interface";
import { IVideo } from "./video.interface";
import { IAudio } from "./audio.interface";
import { IImage } from "./image.interface";
import { Link } from "./link";

export interface IContentQuery {
  contentId: string;
  contentType: ContentType;
}

export interface ICreateContentQuery {
  contentType: ContentType;
  content: string;
}

export interface IUpdateContentQuery {
  contentType: ContentType;
  content: string|Express.Multer.File;
}

export interface IContentCreator<T> {
  content: T;
  item?: IItem;
  contentId?: string|Express.Multer.File;
}

export type IAllContent = IDocument | IVideo | IAudio | IImage | Link;

export type AllFileContent = Exclude<IAllContent, Link>;
