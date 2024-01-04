import { Category } from "../enums/Category";
import { ContentType } from "../enums/ContentType";
import { Corp } from "../enums/Corp";
import { Grade } from "../enums/Grade";
import { Section } from "../enums/Section";
import { IUnit } from "./unit.interface";
import { IUser, IUserItemPatch } from "./user.interface";
import { IPaginationQuery, IPagingQuery } from "./helpers/paginator.interface";
import { IFilter } from "./filter.interface";
import { Status } from "../enums/Status";

export interface IItemQuery extends IPaginationQuery {
  filters?: string[];
  sections?: Section[];
  categories?: Category[];
  grades?: Grade[];
  contentType?: ContentType;
  search?: string;
  isActive?: boolean;
}

export interface IItemPagingQuery extends IPagingQuery {
  filters?: string[];
  sections?: Section[];
  categories?: Category[];
  grades?: Grade[];
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
  contentType: ContentType;
  status: Status;
  thumbNail: string;
  contentId: string;
  editedBy: string | IUser;
  filters: string[] | IFilter[];
  unit: string | IUnit;
}

export interface IFilteredItem extends IPagingQuery {
  filters: string[];
  groupedByFilters?: string[];
}

export type GroupedItems = { [key: string]: IItem[] };
