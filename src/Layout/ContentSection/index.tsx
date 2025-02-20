import * as React from 'react';

// Components
import NewsContent from '../../Components/NewsContent/';
import LoadingScreen from '../../Components/Common/Loading';
import CategoryFilter from '../../Components/CategoryFilter';

// Utils
import { SOURCE_TYPES } from '../../Constants';
// import { filterSearchData } from '../../Utils/helper';
import { AppContext } from '../../state/context/context';


// CSS
import classes from "../../Css/index.module.scss";

const ContentSection: React.FunctionComponent<{}> = () => {

  const { state : { isLoading, isError, selectedSource,  NEWS_API, GUARDIAN, NEWYORK_TIMES } } = React.useContext(AppContext);

  console.log({isError});
  const renderContentInfo = () =>{
    if(isLoading){
      return <LoadingScreen />;
    } else if(isError){
        return (
          <div className={classes.errorInfo}>
            Data Not Found !!
          </div>
        )
    } else {
        let data;
        switch(selectedSource){
          case SOURCE_TYPES.GUARDIAN: data = GUARDIAN;
          break;
          case SOURCE_TYPES.NEWYORK_TIMES: data = NEWYORK_TIMES;
          break;
          case SOURCE_TYPES.NEWS_API: 
          default:
            data = NEWS_API;
            break;
        }
        return data?.map((news:any, idx:number) => <NewsContent key={idx} content={news}/>);

    }
  };
  
  return (
    <>
      <CategoryFilter />
      <div className={classes.contentSection}>
        {renderContentInfo()}
      </div>
    </>
  );
};

export default ContentSection;
{/*  */}