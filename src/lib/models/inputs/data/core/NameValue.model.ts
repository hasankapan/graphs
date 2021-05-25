import { BaseData } from "../BaseData.model";

export class NameValue extends BaseData {
    private value: number;

    constructor(name: string) {
        super(name);
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number) {
        this.value = value;
    }
}