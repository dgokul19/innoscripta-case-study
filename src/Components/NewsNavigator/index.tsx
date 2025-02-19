import * as React from 'react';

// Utils
import { ActionTypes } from '../../state/actions/action';
import { AppContext } from '../../state/context/context';
import { SOURCE_TYPES, FILTER_LABELS } from "../../Constants/";

// CSS
import classes from "../../Css/index.module.scss";


const sourceKeys: string[] = Object.keys(SOURCE_TYPES);

interface IAppProps { }

const NewsNavigator: React.FunctionComponent<IAppProps> = () => {

    const { state : { selectedSource }, dispatch } = React.useContext(AppContext);

    const [searchKey, setSearchKey] = React.useState('');
    const [searchByDate, setSearchByDate] = React.useState('');

    const handleSourceChange = (param: string) => {
        if(param !== selectedSource){
            dispatch({ type : ActionTypes.UPDATE_SORCE_TYPE, payload : param});
        }
        return;
    };
    const handleKeywordSearch = (type:string) => {
        if(type === 'keyword'){
            if(!searchKey) return;
            dispatch({ type : ActionTypes.UPDATE_FILTER_SEARCH, payload : { searchKey }});
        } else {
            if(!searchByDate) return;
            dispatch({ type : ActionTypes.UPDATE_FILTER_SEARCH, payload : {searchByDate}});
        }
    };

    const handleClearFilter = () => {
        const optn = { searchKey : '', searchByDate : '' }
        setSearchKey('');
        setSearchByDate('');
        dispatch({ type : ActionTypes.CLEAR_FILTER, payload : optn});
    };

    return (
        <div className={classes.filterContainer}>
            <div className={classes.filterContent}>
                <label>Search Keywords</label>
                <div className={classes.searchField}>
                    <input name={`keywords`} 
                    placeholder={`Search keywords..`} 
                    value={searchKey} 
                    onChange={(e) => setSearchKey(e.target.value)} />
                    <button onClick={() => handleKeywordSearch('keyword')}><i className='fa fa-search'></i></button>
                </div>
            </div>

            <div className={classes.filterContent}>
                <label>Filter by Date</label>
                <div className={classes.searchField}>
                    <input type="date" name={`searchByDate`} 
                    placeholder={`Enter by date..`} 
                    value={searchByDate} 
                    onChange={(e) => setSearchByDate(e.target.value)} />
                    <button onClick={() => handleKeywordSearch('date')}><i className='fa fa-search'></i></button>
                </div>
            </div>

            <div className={classes.filterContent}>
                <label>Source</label>
                <ul>
                    {sourceKeys.map(labelTxt => <li key={labelTxt} className={`${selectedSource === labelTxt ? classes.activeNav : null}`} onClick={() =>handleSourceChange(labelTxt)}>{FILTER_LABELS[labelTxt]}</li>)}
                </ul>
            </div>
            <div className={classes.clearFilter}>
                <span>Clear Filter</span>
                <i className='fa fa-times' onClick={handleClearFilter}></i>
            </div>
        </div>
    );
};

export default NewsNavigator;
