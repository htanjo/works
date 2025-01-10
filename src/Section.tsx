import { ReactNode, useEffect, useMemo, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'motion/react';
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
  const [zoomMargin, setZoomMargin] = useState(
    window.innerWidth <= 767 ? 16 : 36,
  );
  const [translateY, setTranslateY] = useState(
    window.innerWidth <= 767 ? 40 : 80,
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 767) {
        setZoomMargin(16);
        setTranslateY(40);
      } else {
        setZoomMargin(36);
        setTranslateY(80);
      }
    };
    window.addEventListener('resize', handleWindowResize);
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
          <motion.div
            className={`${classes.imageColumn} ${classes.even}`}
            initial={{ transform: `translateY(${translateY}px)` }}
            whileInView={{ transform: 'translateY(0px)' }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: false,
              margin: `1000px 0px -${translateY * 0.25}px 0px`,
            }}
          >
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
          </motion.div>
          <motion.div
            className={`${classes.imageColumn} ${classes.odd}`}
            initial={{ transform: `translateY(${translateY * 2}px)` }}
            whileInView={{ transform: 'translateY(0px)' }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: false,
              margin: `1000px 0px -${translateY * 0.25}px 0px`,
            }}
          >
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
          </motion.div>
        </div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Section;
