import React from 'react';
import { ImageTypes } from '../../types/ApiDataTypes';
import styles from './DescriptionBlock.module.css';

interface Props {
  paragraph: string;
  image: ImageTypes;
  dir?: 'default' | 'invert';
}

const DescriptionBlock: React.FC<Props> = ({
  image,
  paragraph,
  dir = 'default',
}) => {
  return (
    <div className={styles.block}>
      {dir === 'default' ? (
        <>
          <div className={styles.block__left}>
            <img src={image?.url} alt={image?.name} />
          </div>
          <div className={styles.block__right}>
            <p>{paragraph}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.block__right}>
            <p>{paragraph}</p>
          </div>
          <div className={styles.block__left}>
            <img src={image?.url} alt={image?.name} />
          </div>
        </>
      )}
    </div>
  );
};

export default DescriptionBlock;
