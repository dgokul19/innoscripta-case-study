import * as React from 'react';

// Utils
import { ContentDisplayType } from '../../Types';
import { formatDate } from '../../Utils/helper';

// CSS
import classes from "../../Css/index.module.scss";

import defaultImage from "../../assets/default-featured-image.jpg";

interface IAppProps {
  content : ContentDisplayType
}

const NewsContent: React.FunctionComponent<IAppProps> = ({content}) => {
  return (
        <div className={classes.newsContentBox}>
            <div className={classes.imageContent}>
                <img src={content?.imgUrl || defaultImage} />
            </div>
            <div className={classes.contentText}>
            <h4>{content?.title}</h4>
            <p>{content?.desc}</p>
            <div className={classes.infoContent}>
                <div>
                  <span>Published at:</span>
                  <span>{formatDate(content?.publishedAt)}</span>
                </div>
                <div>
                  <span>Author:</span>
                  <span>{content?.author}</span>
                </div>
            </div>
            </div>
        </div>
  );
};

export default NewsContent;
