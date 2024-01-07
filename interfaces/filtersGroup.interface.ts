import {World} from "./world.interface";
import {IFilter} from "./filter.interface";

export type FiltersGroup = {
    _id: string;
    name: string;
    world: string | World;
    level: number;
    filters: string[] | IFilter[];
    isLast?: boolean;
    ancestorFilters?: string[] | IFilter[];
};