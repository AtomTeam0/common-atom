import { Category } from "../enums/Category";
import { ContentType } from "../enums/ContentType";
import { Corp } from "../enums/Corp";
import { Grade } from "../enums/Grade";
import { Section } from "../enums/Section";
import { IArea } from "./area.interface";
import { IUnit } from "./unit.interface";
import { IUser, IUserItemPatch } from "./user.interface";
import { IPaginationQuery } from "./helpers/paginator.interface";

export interface IItemQuery extends IPaginationQuery {
  areaId?: string;
  sections?: Section[];
  categories?: Category[];
  contentType?: ContentType;
  search?: string;
  isActive?: boolean;
}

export interface IMissionItem {
  title: string;
  contentType: ContentType;
  priority?: number;
  editedBy: string | IUser;
  contentId: string;
}

export const missionItemKeys: (keyof IMissionItem)[] = [
  "title",
  "contentType",
  "priority",
  "contentId",
];

export interface IItem extends IUserItemPatch {
  _id?: string;
  updatedAt: Date;
  title: string;
  description: string;
  views: number;
  timeToRead: number;
  priority: number;
  isActive: boolean;
  isByMission: boolean;
  sections: Section[];
  categories: Category[] | Category;
  corps: Corp[];
  grade: Grade;
  contentType: ContentType;
  thumbNail: string;
  contentId: string;
  editedBy: string | IUser;
  areas: string[] | IArea[];
  unit: string | IUnit;
  similarItems: string[] | IItem[];
}
