export interface BaseSys {
  id: string;
}

export interface SysGraphQL extends BaseSys {
  publishedAt: string;
}

export interface SysRestApi extends BaseSys {
  createdAt?: string;
}

interface ContentfulBaseTag {
  name: string;
}

export interface ContentfulGraphQLTag extends ContentfulBaseTag {
  id: string;
}

export interface ContentfulRESTTag extends ContentfulBaseTag {
  sys: BaseSys;
}
