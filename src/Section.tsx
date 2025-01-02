import { ReactNode, useMemo } from 'react';
import classes from './Section.module.scss';

export interface Image {
  src: string;
  alt: string;
  aspectRatio: number;
}

interface SectionProps {
  title: string;
  description: ReactNode;
  images: Image[];
}

function Section({ title, description, images }: SectionProps) {
  const evenImages = useMemo(
    () => images.filter((_image, index) => !((index + 1) % 2)),
    [images],
  );
  const oddImages = useMemo(
    () => images.filter((_image, index) => !!((index + 1) % 2)),
    [images],
  );
  return (
    <div className={classes.section}>
      <div className={classes.text}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.images}>
        <div className={`${classes.imageColumn} ${classes.even}`}>
          {evenImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              style={{ aspectRatio: image.aspectRatio }}
              className={classes.image}
            />
          ))}
        </div>
        <div className={`${classes.imageColumn} ${classes.odd}`}>
          {oddImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              style={{ aspectRatio: image.aspectRatio }}
              className={classes.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
