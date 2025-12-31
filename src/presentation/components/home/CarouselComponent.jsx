
import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselData,categoriesData } from '../../../data/data';
import carousel1 from '../../../assets/carousel1.jpg'
import carousel2 from '../../../assets/carousel2.png'
import carousel3 from '../../../assets/carousel3.jpg'
import BookGrid from './BookGrid'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
const responsiveThree = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
const fixedImages = [carousel1,carousel2,carousel3];

const CarouselComponent = () => {
  return (
  <>
    <Carousel
      responsive={responsive}
      autoPlay
      infinite
      autoPlaySpeed={3000}
      showDots
      arrows={false}
    >
      {carouselData.map((item) => (
        <Image key={item.id} src={item.url} alt="carousel" />
      ))}
    </Carousel>

    <Spacer /> 

    <Carousel
        responsive={responsiveThree}
        infinite
        arrows
        autoPlay={false}
      >
        {fixedImages.map((img, index) => (
  <ImageWrapper key={index}>
    <SmallImage src={img} alt="fixed-carousel" />
  </ImageWrapper>
))}

      </Carousel>
      <Heading>Shop by Categories</Heading>

       <CategoriesContainer>
      {categoriesData.map((item, index) => (
        <CategoryCard key={index}>
          <CategoryIcon src={item.icon} alt={item.label} />
          <CategoryLabel>{item.label}</CategoryLabel>
        </CategoryCard>
      ))}
    </CategoriesContainer>
    <BookGrid/>
      </>
  );
};

export default CarouselComponent;

const Image = styled('img')({
  width: '100%',
  height: 280,
  objectFit: 'cover'
});


const SmallImage = styled('img')({
  width: '100%',
  height: 160,
  objectFit: 'cover',
  borderRadius: 8,
});

const Spacer = styled('div')({
  height: 50   
});
const ImageWrapper = styled('div')({
  padding: '0 10px',   
});
const CategoriesContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px', 
  padding: '10px 0',
  margin: '0 20px 20px',
 justifyContent: 'center',
});


const CategoryCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  
  width: 'calc((100% - 7 * 20px) / 8)',

  '@media (max-width: 1024px)': {
    width: 'calc((100% - 3 * 20px) / 4)',
  },

  '@media (max-width: 600px)': {
    width: 'calc((100% - 2 * 16px) / 3)',
  },
});




const CategoryIcon = styled('img')({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: '#ffffff',
  padding: '10px',
  objectFit: 'contain',
  marginBottom: '5px',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    border: '2px solid #1976d2',
  },


  '@media (max-width: 1024px)': {
    width: '70px',
    height: '70px',
  },

  '@media (max-width: 600px)': {
    width: '60px',
    height: '60px',
  },
});

// 
const CategoryLabel = styled('span')({
  fontSize: '12px',
  textAlign: 'center',
  color: '#333',

  '@media (max-width: 600px)': {
    fontSize: '11px',
  },
});


const Heading = styled('h2')({
  fontSize: '20px',
  fontWeight: 600,
  color: '#4A4A4A',
  margin: '20px 20px 10px',

  '@media (max-width: 600px)': {
    fontSize: '18px',
    textAlign: 'center',
  },
});
