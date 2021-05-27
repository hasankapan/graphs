import { BaseData } from "../../../interfaces/data/BaseData.model";

export class BaseDataImpl implements BaseData {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}