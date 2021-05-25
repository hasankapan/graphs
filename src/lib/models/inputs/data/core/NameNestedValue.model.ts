import { BaseData } from "../BaseData.model";
import { NameValue } from "./NameValue.model";

export class NameNestedValue extends BaseData {
    private value: NameValue[] = [];

    constructor(name: string) {
        super(name);
    }

    getValue(): NameValue[] {
        return this.value;
    }

    setValue(value: NameValue[]) {
        this.value = value;
    }
}