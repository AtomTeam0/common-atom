import { Category } from "../enums/Category";
import { ContentType } from "../enums/ContentType";
import { Grade } from "../enums/Grade";
import { Section } from "../enums/Section";
import { IUnit } from "./unit.interface";
import { IUser, IUserItemPatch } from "./user.interface";
import { IPaginationQuery, IPagingQuery } from "./helpers/paginator.interface";
import { IFilter } from "./filter.interface";
import { Status } from "../enums/Status";
import { World } from "./world.interface";
import { IAllContent } from "./content.interface";
import { IChapter } from "./chapter.interface";

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
  priority: number;
  timeToRead: number;
  isActive: boolean;
  contentType: ContentType;
  status: Status;
  thumbNail: string;
  unit: string | IUnit;
  filters: string[] | IFilter[];
  world: string | World;
  contentId: string;
  editedBy: string | IUser;
  chapters: string[] | IChapter[];
}

export interface IItemWithContent extends IItem {
  content: IAllContent;
}

export interface IUpdateItemQuery
  extends Partial<Omit<IItemWithContent, "_id" | "content">> {
  _id: string;
  content?: Partial<Omit<IAllContent, "_id">> & { _id: string };
}
export interface IFilteredItem extends IPagingQuery {
  filters: string[];
  groupedByFilters?: string[];
}

export type GroupedItems = { [key: string]: IItem[] };
