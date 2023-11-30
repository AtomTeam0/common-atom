export interface IFilter{
    _id: string;
    level: number;
    name: string;
    world: string;
    color?: string;
    default?: boolean;
    timeDeleted?: Date;
    thumbNail?: string;
}

export type FiltersLevels = { [level in number]: IFilter[] };