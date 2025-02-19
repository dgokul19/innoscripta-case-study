import * as React from 'react';

// CSS
import classes from "../../../Css/index.module.scss";

// Assets
import LoadingGif from "../../../assets/Spinner-3.gif";

interface IAppProps {
}

const LoadingScreen: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={classes.loadingContainer}>
        <img src={LoadingGif} />
    </div>
  );
};

export default LoadingScreen;
