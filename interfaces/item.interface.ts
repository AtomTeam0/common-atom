import {Category} from "../enums/Category";
import {ContentType} from "../enums/ContentType";
import {Corp} from "../enums/Corp";
import {Grade} from "../enums/Grade";
import {Section} from "../enums/Section";
import {IUnit} from "./unit.interface";
import {IUser, IUserItemPatch} from "./user.interface";
import {IPaginationQuery, IPagingQuery} from "./helpers/paginator.interface";
import {IFilter} from "./filter.interface";
import {World} from "./world.interface";
import {TableRow} from "./table.interface";

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
  timeToRead: number;
  priority: number;
  views: number;
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
  filters: string[] | IFilter[];
  unit: string | IUnit;
  similarItems: string[] | IItem[];
  world?: string | World;
}

export interface IFilteredItem extends IPagingQuery {
  filters: string[];
  groupedByFilters?: string[];
}

export type GroupedItems = {[key: string]: IItem[]}

export interface NarrowedItem extends TableRow <string> {
  updatedAt: Date;
  title: string;
  views: number;
  isActive: boolean;
  editedBy: string | IUser;
  filters: string[] | IFilter[];
}

type filterColumns = {[key: string]: string[]}

export interface ContentTableItem extends TableRow <string> {
  updatedAt: Date;
  title: string;
  views: number;
  isActive: boolean;
  editedBy: string | IUser;
  filters: filterColumns;

}
