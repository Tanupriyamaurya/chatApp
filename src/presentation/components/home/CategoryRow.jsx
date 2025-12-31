import React, { useState } from 'react';

import { styled, Box, Typography} from "@mui/material";
import { secondaryNavData } from '../../../data/data';
import playstore from '../../../assets/playstore.png'
import whatsapp from '../../../assets/whatsapp.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { categories } from '../../../data/data';

const CategoryRow = ({onCategoryClick}) => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <RowContainer data-testid="category-row" >

        <MenuButton onClick={() => setOpen(!open)}>
    <MenuIcon />
  </MenuButton>
  
      <SliderWrapper>
        {secondaryNavData.map((obj, index) => (
          <Item key={index}
          onClick={()=>{  console.log("clicked:", obj.label);
onCategoryClick(obj.label)}}
          sx={{cursor:"pointer"}}>
            <ItemImg src={obj.icon} alt={obj.label} />
            <ItemText>{obj.label}</ItemText>
          </Item>
        ))}
      </SliderWrapper>

      <RightButtons>
  <PlayStoreBox>
    <PlayStoreImg src={playstore} alt="Play Store" />
    <PlayStoreText>Download App</PlayStoreText>
  </PlayStoreBox>
<WhatsAppBox>
    <WhatsAppImg src={whatsapp} alt="WhatsApp" />
    <WhatsAppText>Chat With US</WhatsAppText>
  </WhatsAppBox>
  
</RightButtons>

    </RowContainer>
    {open && (
        <CategoryPanel>
          {categories.map((cat, index) => (
            <CategoryColumn key={index}>
              <CategoryTitle>{cat.title}</CategoryTitle>
              {cat.items.map((item, i) => (
                <CategoryItem key={i}>{item}</CategoryItem>
              ))}
            </CategoryColumn>
          ))}
        </CategoryPanel>
    )}
</>
  )
}

export default CategoryRow;
const RowContainer = styled(Box)`
  background: #ffffff;
  padding: 16px 24px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;


const SliderWrapper = styled(Box)`
  display: flex;
  gap: 20px;
  position: absolute;    
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    position: static;
    transform: none;
    justify-content: flex-start;
  }
`;

const Item = styled(Box)`
  min-width: unset;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
   flex-shrink: 1;
  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    min-width: 45px;
  }
`;

const ItemImg = styled("img")`
  width: 35px;
  height: 35px;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;



const ItemText = styled(Typography)`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #333;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const RightButtons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;    
           

  @media (max-width: 900px) {
    align-self: flex-end;     
    width: 100%;
  }
`;

const PlayStoreImg = styled("img")`
  width: 90px;      
  height: auto;      
  max-height: 35px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 70px;
    max-height: 28px;
  }
`;




const PlayStoreBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlayStoreText = styled(Typography)`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
  color: #333;
`;
const WhatsAppImg = styled("img")`
  width: 35px;
  height: 35px;
  object-fit: contain;
`;

const WhatsAppBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const WhatsAppText = styled(Typography)`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
  color: #333;
`;
const MenuButton = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;

  svg {
    font-size: 28px;
    color: #333;
  }
`;



const CategoryPanel = styled(Box)`
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const CategoryColumn = styled(Box)``;

const CategoryTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 10px;
  color: #2d5fad;
`;

const CategoryItem = styled(Typography)`
  font-size: 13px;
  margin-bottom: 6px;
  cursor: pointer;

  &:hover {
    color: #2d5fad;
  }
`;



