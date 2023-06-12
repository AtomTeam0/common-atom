import { IPaginationQuery } from './helpers/paginator.interface';
import { ISubject } from './subject.interface';

export interface IPlaylist {
  _id?: string;
  title: string;
  author: string;
  description: string;
  isActive: boolean;
  thumbNail: string;
  subjects: string[] | ISubject[];
}

export interface IPlaylistQuery extends IPaginationQuery {
  isActive?: boolean;
}
