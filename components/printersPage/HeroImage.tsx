import React from 'react';
import { ImageTypes } from '../../types/ApiDataTypes';

interface Props {
  heroImage: ImageTypes[];
}

const HeroImage: React.FC<Props> = ({ heroImage }) => {
  return (
    <div>
      {heroImage.map((i) => (
        <img
          key={i._id}
          src={i.url}
          alt={i.name}
          width="80%"
          height={500}
          style={{
            objectFit: 'contain',
          }}
        />
      ))}
    </div>
  );
};

export default HeroImage;
