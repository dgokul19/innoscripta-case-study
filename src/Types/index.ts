// src/types.ts

export type SOURCE_TYPE = 'NEWS_API' | 'GUARDIAN' | 'NEWYORK_TIMES';

export type MainNewsType = NewsArticleType | GuardianArticleType | NewYorkTimesArticleType | undefined;

export interface NewsAPiTypeResponse {
    status : string,
    articles : NewsArticleType[]
}

export type ContentDisplayType = {
    id: string
    title: string
    desc: string
    author: string
    publishedAt: string
    imgUrl: string
}

export type NewsArticleType = {
    id : string
    title: string,
    description: string,
    url: string,
    urlToImage : string | null,
    source : any,
    publishedAt : string,
    content : string,
    author : string
};

export type GuardianArticleType = {
    id : string,
    type: string,
    webPublicationDate : string,
    webTitle : string,
    sectionName : string,
    pillarId : string,
    pillarName : string,
    webUrl : string,
}

export type NewYorkTimesArticleType = {
    _id : string,
    abstract: string,
    byline : { original : string },
    document_type : string,
    lead_paragraph : string,
    pub_date : string,
    section_name : string,
    snippet : string,
    source : string
}

export type InitialStateType = {
    isLoading : Boolean
    searchKey : string
    searchByDate : string
    selectedSource : string
    NEWS_API: ContentDisplayType[] | null,
    GUARDIAN: null,
    NEWYORK_TIMES : null
}

export type FilterProps = {
    searchKey? : string,
    searchByDate? : string
};

export const _KEYS = {
    NEWS_API_KEY : 'c829b43aa4924b5aa601c626ebc7d3e2',
    GUARDIAN_API_KEY : 'fd4be056-120d-4b47-b50e-66916b80210b',
    NEWYORK_TIMES_API_KEY : 'aEUlGMUxQV8AsY3YS15ASMsasspFWpRA'
}