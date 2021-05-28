import { NameValue } from "../../../../interfaces/data/NameValue.interface";
import { BaseDataImpl } from "../BaseDataImpl.model";

export class NameValueImpl extends BaseDataImpl implements NameValue {
    value: number;

    constructor(name: string) {
        super(name);
        this.value = 0;
    }
}