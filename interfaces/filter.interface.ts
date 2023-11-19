export interface IFilter{
    _id: string;
    name: string;
    world: string;
    level: number;
    thumbNail?: string;
    timeDeleted?: Date;
}