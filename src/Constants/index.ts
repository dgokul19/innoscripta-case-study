interface SourceStringType {
    [key: string] : string
}
export const SOURCE_TYPES:SourceStringType = {
    NEWS_API : 'NEWS_API',
    GUARDIAN : 'GUARDIAN',
    NEWYORK_TIMES : 'NEWYORK_TIMES'
};

export const FILTER_LABELS:SourceStringType = {
    NEWS_API : 'NewsApi.Org',
    GUARDIAN : 'Guardian',
    NEWYORK_TIMES : 'New York Times'
};