import { ReactNode, useEffect, useMemo, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import classes from './Section.module.scss';

export interface Image {
  src: string;
  alt: string;
  aspectRatio: number;
}

interface SectionProps {
  title: string;
  info: ReactNode;
  description: ReactNode;
  images: Image[];
  primaryColor: string;
  secondaryColor: string;
}

function Section({
  title,
  info,
  description,
  images,
  primaryColor,
  secondaryColor,
}: SectionProps) {
  const evenImages = useMemo(
    () => images.filter((_image, index) => !((index + 1) % 2)),
    [images],
  );
  const oddImages = useMemo(
    () => images.filter((_image, index) => !!((index + 1) % 2)),
    [images],
  );
  const [zoomMargin, setZoomMargin] = useState(36);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 950) {
        setZoomMargin(16);
      } else {
        setZoomMargin(36);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
      className={classes.section}
      style={{
        // @ts-ignore
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
      }}
    >
      <div className={classes.sectionContainer}>
        <div className={classes.caption}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.info}>{info}</div>
        </div>
        <div className={classes.images}>
          <div className={`${classes.imageColumn} ${classes.even}`}>
            {evenImages.map((image) => (
              <Zoom zoomMargin={zoomMargin}>
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  style={{ aspectRatio: image.aspectRatio }}
                  className={classes.image}
                  loading="lazy"
                />
              </Zoom>
            ))}
          </div>
          <div className={`${classes.imageColumn} ${classes.odd}`}>
            {oddImages.map((image) => (
              <Zoom zoomMargin={zoomMargin}>
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  style={{ aspectRatio: image.aspectRatio }}
                  className={classes.image}
                  loading="lazy"
                />
              </Zoom>
            ))}
          </div>
        </div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Section;
