import { BaseData } from "./BaseData.interface";
import { NameValue } from "./NameValue.interface";

export interface NameNestedValue extends BaseData {
    value: NameValue[];
}