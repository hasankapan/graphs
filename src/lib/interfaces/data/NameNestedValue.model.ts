import { BaseData } from "./BaseData.model";
import { NameValue } from "./NameValue.model";

export interface NameNestedValue extends BaseData {
    value: NameValue[];
}