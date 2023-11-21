export interface IFilter{
    _id: string;
    level: number;
    name: string;
    world: string;
    default?: boolean;
    timeDeleted?: Date;
    thumbNail?: string;
}