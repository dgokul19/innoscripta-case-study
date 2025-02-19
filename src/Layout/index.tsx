import { useContext, useEffect } from 'react';

// Component
import Container from '../Components/Container';
import TopSectionBar from '../Components/TopBar';
import NewsNavigator from '../Components/NewsNavigator';
import ContentSection from './ContentSection';

// Utils
import { AppContext } from '../state/context/context';
import { 
  fetchGuardianApiContent, 
  fetchNewsApiContent, 
  fetchNewYorkTimesContent 
} from '../api/apihelper';

import { ActionTypes } from '../state/actions/action';
import { SOURCE_TYPES } from '../Constants';

// CSS
import classes from "../Css/index.module.scss";




export default function HomeLayout () {
  const { state : { selectedSource, searchByDate, searchKey }, dispatch } = useContext(AppContext);

  const fetchContent = async () => {
    dispatch({type : ActionTypes.FETCHING_NEWS});
    let data:any;  
    
    let keyProp = {
      searchKey,
      searchByDate
    };

    switch(selectedSource){
        case SOURCE_TYPES.GUARDIAN:  
          data = await fetchGuardianApiContent(keyProp);
          break
        case SOURCE_TYPES.NEWYORK_TIMES:  
          data = await fetchNewYorkTimesContent(keyProp);
          break;
        default:
        case SOURCE_TYPES.NEWS_API:  
          data = await fetchNewsApiContent(keyProp);
          break;
      }
      dispatch({type : ActionTypes.SET_NEWS_DATA, payload : data});
    }

  useEffect(() => {
    fetchContent();
  }, [selectedSource, searchKey, searchByDate]);

  return (
    <div className={classes.homeContainer}>
       <Container>
            <TopSectionBar />
            <NewsNavigator />
            <ContentSection />
        </Container> 
    </div>
  );
}
