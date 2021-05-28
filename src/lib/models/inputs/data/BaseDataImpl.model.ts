import { BaseData } from "../../../interfaces/data/BaseData.interface";

export class BaseDataImpl implements BaseData {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}