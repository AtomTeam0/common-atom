import { Compound } from "../enums/Compound";
import { Degree } from "../enums/Degree";
import { Job } from "../enums/Job";
import { Publish } from "../enums/publish";
import {CombatShapes} from "../enums/CombatShapes";
import { Functions } from "../enums/Functions";
import { IBook } from "./book.interface";

export interface ISubject {
    _id?: string;
    title: string;
    priority: number;
    pages: number[];
    book: string | IBook;
    jobs: Job[];
    publishType: Publish[];
    degrees: Degree[];
    compounds: Compound[];
    combatShapes: CombatShapes[];
    functions: Functions[];
  }
