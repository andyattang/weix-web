import React from 'react';
import styles from './CircleIcon.css';
export const CircleIcon = (props) => {
  return (
    <div className={styles.circleIcon}>
      
        <div style={{
          borderRadius: props.radius?props.radius:'50px',
          width: props.radius?props.radius:'50px',
          height: props.radius?props.radius:'50px',
          borderSize: props.borderSize?props.borderSize:'2px',
          borderColor: props.borderColor?props.borderColor:'#FFFFFF'}}>
          <img src={props.src} />
        </div>
    </div>
  );
};

CircleIcon.propTypes = {
};

export default CircleIcon;
