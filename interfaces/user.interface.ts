import {Permission} from "../enums/Permission";
import {Section} from "../enums/Section";
import {WatchMode} from "../enums/WatchMode";
import {IPaginationQuery} from "./helpers/paginator.interface";
import {IItem} from "./item.interface";

export interface IUserQuery extends IPaginationQuery {
  search?: string;
  permission?: Permission;
}

export interface IUserAmountQuery {
  permission: Permission;
}

export interface ILastWatchedQuery {
  area: string;
  section: Section;
}
export interface IUserChapterPatch {
  mode?: WatchMode;
}

export interface IUserMediaPatch {
  mode?: WatchMode;
  note?: string;
}

export interface IUserItemPatch {
  isFavorite?: boolean;
}

export interface IUser {
  _id?: string;
  isFirstLogin: boolean;
  name: string;
  createdAt: Date;
  permission: Permission;
  favorites: string[] | IItem[];
  lastWatched: string[] | IItem[];
  employees?: string[] | IUser[];
  media: ({ mediaId: string } & IUserMediaPatch)[];
  chapters: ({ chapterId: string } & IUserChapterPatch)[];
}

export interface IUserUpdater extends IUser {
  toggleFavorite?: string;
  toggleEmployee?: string;
}

export interface IUserAuthUpdater {
  name: string;
}

export const otherUserKeys: (keyof IUserUpdater)[] = [
  "permission",
  "toggleEmployee",
];
