import React from 'react';
import styles from './CircleIcon.css';
export const CircleIcon = (props) => {
  return (
    <div class={styles.circleIcon}>
      <figure>
        <div style={{
          borderRadius: props.radius?props.radius:'50px',
          borderSize: props.borderSize?props.borderSize:'2px',
          borderColor: props.borderColor?props.borderColor:'red'}}>
          <img src={props.src} />
        </div>
      </figure>
    </div>
  );
};

CircleIcon.propTypes = {
};

export default CircleIcon;
