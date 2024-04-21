import { IPaginationQuery } from "./helpers/paginator.interface";

export type IMyWikiQuery = IPaginationQuery & {
  search?: string;
};

export type IMyWiki = {
  _id?: string;
  word: string;
  defenition: string;
  isByViewer?: boolean;
  createdBy?: string;
  approvedBy?: string;
};
