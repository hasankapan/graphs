import { NameNestedValue } from "../../../../interfaces/data/NameNestedValue.interface";
import { NameValue } from "../../../../interfaces/data/NameValue.interface";
import { BaseDataImpl } from "../BaseDataImpl.model";

export class NameNestedValueImpl extends BaseDataImpl implements NameNestedValue {
    value: NameValue[];

    constructor(name: string) {
        super(name);
        this.value = [];
    }
}