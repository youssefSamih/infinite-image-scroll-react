import styled from 'styled-components';

interface ImageProps {
  heightImage?: string | number;
  position?: string;
}

export const PictureImage = styled.picture<ImageProps>`
  div {
    ${({ heightImage }) =>
      heightImage ? `height: ${heightImage}` : 'height: 100'};
    img {
      width: 100%;
      object-fit: cover;
      object-position: ${({ position }) => (position ? position : 'center')};
      ${({ heightImage }) =>
        heightImage ? `height: ${heightImage}` : 'height: 100%'};
      display: block;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 14rem;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;
