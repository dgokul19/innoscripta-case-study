import * as React from 'react';

// Utils
import { AppContext } from '../../state/context/context';
import { CATEGORY_TAGS } from '../../Constants';


// CSS
import classes from "../../Css/index.module.scss";
import { ActionTypes } from '../../state/actions/action';

interface IAppProps {}

const CategoryFilter: React.FunctionComponent<IAppProps> = () => {
    const { state : { searchKey }, dispatch } = React.useContext(AppContext)

    const handleCategorySearch = (tagName: string) => {
        dispatch({ type : ActionTypes.UPDATE_FILTER_SEARCH, payload : { searchKey : tagName}});
    };

  return (
    <div className={classes.categorySection}>
        <h4>News Categories:</h4>
        <ul>
            {CATEGORY_TAGS.map((tag:string) => <li 
                key={tag} 
                className={`${searchKey === tag ? classes.activeTag : null}`}
                onClick={() => handleCategorySearch(tag)}>
                    <span>{tag}</span>
                </li>)}
        </ul>
    </div>
  );
};

export default CategoryFilter;
