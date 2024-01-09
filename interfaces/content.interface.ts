import { ContentType } from "../enums/ContentType";
import { IInfographic } from "./infographic.interface";
import { IItem } from "./item.interface";
import { ILesson } from "./lesson.interface";
import { IMedia } from "./media.interface";
import { IPakal } from "./pakal.interface";
import { IDocument } from "./document.interface";
import { IVideo } from "./video.interface";
import { IAudio } from "./audio.interface";
import { IImage } from "./image.interface";

export interface IContentQuery {
  contentId: string;
  contentType: ContentType;
}

export interface IContentCreator<T> {
  content: T;
  item?: IItem;
  contentId?: string;
}

export type IAllContent = IDocument | IVideo | IAudio | IImage;
