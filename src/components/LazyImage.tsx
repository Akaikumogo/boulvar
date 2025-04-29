import { JSX } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyImage = ({ image, className }: any): JSX.Element => {
  return (
    <div className={``}>
      <LazyLoadImage
        alt={''}
        height={image.height}
        src={image}
        width={image.width}
        effect="blur"
        className={className}
      />
    </div>
  );
};

export default LazyImage;
