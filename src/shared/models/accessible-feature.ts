export interface AccessibleFeature {
    featureId: number;
    featureUrl: string;
    parentId: any;
    featureCode: string;
    featureType: number;
    featureName: string;
    status: number;
    actionLst: [any];
    visibilityLevelLst: [number];
    items: [AccessibleFeature];
}
