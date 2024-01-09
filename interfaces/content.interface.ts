import { ContentType } from "../enums/ContentType";
import { IItem } from "./item.interface";
import { IDocument } from "./document.interface";
import { IVideo } from "./video.interface";
import { IAudio } from "./audio.interface";
import { IImage } from "./image.interface";

export interface IContentQuery {
  contentId: string;
  contentType: ContentType;
}

export interface ICreateContentQuery {
  contentType: ContentType;
  content: IAllContent;
}

export interface IContentCreator<T> {
  content: T;
  item?: IItem;
  contentId?: string;
}

export type IAllContent = IDocument | IVideo | IAudio | IImage;
