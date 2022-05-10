import {TableActionModel} from "./tableAction.model";
import {TableColumnModel} from "./tableColumn.model";

export class TableActionConfigModel{
    allowExport? : boolean;
    allowFilter? : boolean;
    allowZoom? : boolean;
    actions? : TableActionModel[];
    columns?: TableColumnModel[];
}