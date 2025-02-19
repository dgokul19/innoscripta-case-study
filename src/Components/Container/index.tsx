import * as React from 'react';

export interface IAppProps {
    children: React.ReactNode;
}
import classes from '../../Css/index.module.scss';

// Hoc Component to make child element fit inside the container
const Container: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <div className={classes.containerLayout}>
        {props.children}
    </div>
  );
}

export default Container;