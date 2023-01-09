export interface User {
    sys:      UserSys;
    total:    number;
    skip:     number;
    limit:    number;
    items:    Item[];
    includes: Includes;
}

export interface Includes {
    Asset: Asset[];
}

export interface Asset {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   AssetFields;
}

export interface AssetFields {
    title:       string;
    description: string;
    file:        File;
}

export interface File {
    url:         string;
    details:     Details;
    fileName:    string;
    contentType: string;
}

export interface Details {
    size:  number;
    image: Image;
}

export interface Image {
    width:  number;
    height: number;
}

export interface Metadata {
    tags: any[];
}

export interface AssetSys {
    space:        ArticleImage;
    id:           string;
    type:         string;
    createdAt:    string;
    updatedAt:    Date;
    environment:  ArticleImage;
    revision:     number;
    locale:       string;
    contentType?: ArticleImage;
}

export interface ArticleImage {
    sys: ArticleImageSys;
    fields: ArticleImageFields
}

export interface ArticleImageFields {
    file: ImageFieldsFile;
    title: string;
}

export interface ImageFieldsFile {
    url: string;
}

export interface ArticleImageSys {
    id:       string;
    type:     Type;
    linkType: LinkType;
}

export enum LinkType {
    Asset = "Asset",
    ContentType = "ContentType",
    Environment = "Environment",
    Space = "Space",
}

export enum Type {
    Link = "Link",
}

export interface Item {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   ItemFields;
}

export interface ItemFields {
    articleTitle: string;
    articleType:  string;
    articleImage: ArticleImage;
}

export interface UserSys {
    type: string;
}
