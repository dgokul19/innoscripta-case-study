// src/types.ts

export type SOURCE_TYPE = 'NEWS_API' | 'GUARDIAN' | 'NEWYORK_TIMES';

export type MainNewsType = NewsArticleType | GuardianArticleType | NewYorkTimesArticleType;

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
    NEWS_API_KEY : 'aBc-829b43aa4924b5a-c43ac-a601c626ebc7d3e2-345',    // Dummy Keys
    GUARDIAN_API_KEY : 'i2re-fd4be056-120d-c43ac-4b47-b50e-66916b80210b-3u495',// Dummy Keys
    NEWYORK_TIMES_API_KEY : '7989-aEUlGMUxQV8AsY3Y-c43ac-S15ASMsasspFWpRA-56asadd91',// Dummy Keys
}
