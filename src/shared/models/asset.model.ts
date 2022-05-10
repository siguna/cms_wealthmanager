export class Asset {
    id?: string;
    createdBy?: string;
    actived: boolean | string;
    assetName: string;
    imgUrl: string;
    textColor: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string | null;
    priority: number
}