import * as React from 'react';

// CSS
import classes from "../../Css/index.module.scss";

const TopSectionBar: React.FunctionComponent = () => {
  return (
    <div className={classes.topbarSection}>
        <div className={classes.logo}>
            <h2>NewsAggregator</h2>
        </div>
        <button>Create an Account</button>
    </div>
  );
};

export default TopSectionBar;
