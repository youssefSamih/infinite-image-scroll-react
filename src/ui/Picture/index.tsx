import Image from 'next/image';
import React from 'react';
import { ImageContainer, PictureImage } from './style';

interface PictureProps {
  uri?: string;
  alt?: string;
  height: string | number;
}

const Picture = ({ uri, alt, height }: PictureProps) => {
  if (uri) {
    return (
      <ImageContainer>
        <PictureImage heightImage={height}>
          <source srcSet={`${uri}?webp`} type="image/webp" />
          <source srcSet={`${uri}`} type="image/jpeg" />
          <Image
            src={`${uri}`}
            alt={alt}
            layout="responsive"
            width={100}
            height={height}
            loading="lazy"
          />
        </PictureImage>
      </ImageContainer>
    );
  }
  return (
    <ImageContainer data-testid="picture">
      <PictureImage heightImage={height}>
        <source
          srcSet="https://via.placeholder.com/1000x595?text=user+image"
          type="image/jpeg"
        />
        <Image
          src="https://via.placeholder.com/1000x595?text=user+image"
          alt={alt}
          layout="responsive"
          width={100}
          height={height}
          loading="lazy"
        />
      </PictureImage>
    </ImageContainer>
  );
};

export default Picture;
