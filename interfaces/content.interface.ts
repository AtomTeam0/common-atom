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
  content: IAllContent;
}

export interface IUpdateContentQuery {
  contentType: ContentType;
  content: Partial<Omit<IAllContent, "_id">> & { _id: string };
}

export interface IContentCreator<T> {
  content: T;
  item?: IItem;
  contentId?: string;
}

export type IAllContent = IDocument | IVideo | IAudio | IImage | Link;

export type AllFileContent = Exclude<IAllContent, Link>;
