import { SOURCE_TYPES } from "../Constants";
import { GuardianArticleType, NewsArticleType, NewYorkTimesArticleType } from "../Types";

export const formatDate = (date: Date | string | undefined) => {
    date = date ? new Date(date) : new Date();
    return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', second: 'numeric', minute: 'numeric', hour12: true });
};

export const filterSearchData = (dataArray: any, stringKey: String) => {
    if (!stringKey) return dataArray;
    return dataArray?.filter((list: any) => list?.title.indexOf(stringKey) > -1)
};

export const formatDataStructure = (_dataArray: any, sourceType: string) => {
    if (sourceType === SOURCE_TYPES.NEWS_API) {
        if (!_dataArray.articles.length) return [];
        return _dataArray?.articles.map((list: NewsArticleType) => {
            return {
                id: list.id,
                title: list.title,
                desc: list.description,
                author: list.author,
                publishedAt: list.publishedAt,
                imgUrl: list.urlToImage
            }
        })
    } else if (sourceType === SOURCE_TYPES.GUARDIAN) {
        if (!_dataArray?.response.results.length) return [];
        return _dataArray?.response.results.map((list: GuardianArticleType) => {
            return {
                id: list.id,
                title: list.webTitle,
                desc: '',
                author: '',
                publishedAt: list.webPublicationDate,
                imgUrl: ''
            }
        })
    } else {
        if (!_dataArray?.response.docs.length) return [];
        return _dataArray?.response.docs.map((list: NewYorkTimesArticleType) => {
            return {
                id: list._id,
                title: list.snippet,
                desc: list.lead_paragraph,
                author: list.byline.original || '',
                publishedAt: list.pub_date,
                imgUrl: ''
            }
        })
    }
}