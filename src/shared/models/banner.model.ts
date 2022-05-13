export class Banner {
    id: Number;
    createdBy: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    bannerType: string;
    bannerName: string;
    bannerContent: string;
    imgUrl: string;
    buttonText: string;
    attachedLink: string;
    priority: Number;
    actived: boolean;
    startActiveTime: string;
    finishActiveTime: string;
    parentId: Number
}

export class Logo {
    id: Number;
    bannerType: string;
    bannerContent: string;
    imgUrl: string;
    parrentId: Number;

}
export class Customer {
    name = '';
  }
