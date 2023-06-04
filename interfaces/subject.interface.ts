import { Compound } from '../enums/Compound';
import { Degree } from '../enums/Degree';
import { Job } from '../enums/Job';
import { Publish } from '../enums/publish';
import { CombatShapes } from '../enums/CombatShapes';
import { Functions } from '../enums/Functions';
import { IBook } from './book.interface';
import { IPaginationQuery } from './helpers/paginator.interface';

export interface IPageRange {
  from: number;
  to: number;
}

export interface ISubject {
  _id?: string;
  title: string;
  priority: number;
  pages: (IPageRange | number)[];
  book: string | IBook;
  jobs: Job[];
  publishType: Publish[];
  degrees: Degree[];
  compounds: Compound[];
  combatShapes: CombatShapes[];
  functions: Functions[];
}

export interface ISubjectQuery extends IPaginationQuery {
  bookId?: string;
  jobs?: Job[];
  publishType?: Publish[];
  degrees?: Degree[];
  compounds?: Compound[];
  isActive?: boolean; 
}
