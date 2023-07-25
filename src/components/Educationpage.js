import { default as React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { PowerBtn } from '../components/AllSvgs';
import BigTitle from '../subComponents/BigTitlte';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: #f2f2f2;
`;

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const EducationHeading = styled.h1`
  margin-top: 4rem;
  font-size: 2rem;
  font-weight: bold;
`;

const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const EducationBox = styled.div`
  width: 300px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  &.animated {
   
  }
`;

const Main = styled.div`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: calc(1em + 1vw);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  & > *:first-child {
    margin-right: 1rem;
  }
`;
// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80px;
//   z-index: 1;
// `;

const EDUCATION = [
  {
    id: 1,
    school: 'JK Lakshmipat University',
    College: 'JK Lakshmipat University',
    degree: 'Bachelor of Computer Science',
    year: '2020 - present',
    percentage: 'up to 3rd year 6.7',
    place: 'Jaipur, Rajasthan',
  },
  {
    id: 2,
    school: 'Resonance junior college',
    College: 'Resonance junior college',
    degree: 'MPC',
    year: '2020',
    percentage: '91%',
  },
  {
    id: 3,
    school: 'Kakatiya Techno school',
    degree: 'SSC',
    year: '2018',
    percentage: '8.0',
    place: 'Khammam, Telangana',
  },
  // Add more education items as needed
];

const lightTheme = {
  body: '#fcf6f4',
  text: '#000000',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
};

const DarkTheme = {
  body: '#000000',
  text: '#fcf6f4',
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: '252, 246, 244',
  bodyRgba: '0,0,0',
};
// const bounceAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-15px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;
// const bounceInRight = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateX(2000px);
//   }
//   60% {
//     opacity: 1;
//     transform: translateX(-30px);
//   }
//   80% {
//     transform: translateX(10px);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

const Educationlist = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  
     const handleClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const handleEducationItemClick = (id) => {
    const updatedEducation = EDUCATION.map((item) =>
      item.id === id ? { ...item, isClicked: !item.isClicked } : item
    );
    setButtonClicked(updatedEducation);
  };
  

  return (
    
    
    <ThemeProvider theme={isButtonClicked ? DarkTheme : lightTheme}>
      {/* <h1 color="light" class="sc-aXZVg hkWTwb">
            VM
          </h1> */}
      <MainContainer>
      {/* <h1 color="light" class="sc-aXZVg hkWTwb">
            VM
          </h1> */}
        <Header >
          {/* <h1 color="light" class="sc-aXZVg hkWTwb">
            VM
          </h1> */}
          <Power onClick={handleClick} isButtonClicked={isButtonClicked}>
            <NavLink to="/">
              <PowerBtn width={30} height={30} fill="currentColor" />
          
            </NavLink>
          </Power>
          
        </Header>
        <EducationHeading>Education</EducationHeading>
      
<EducationContainer>
  {EDUCATION.map((item) => (
    <EducationBox
      key={item.id}
      onClick={() => handleEducationItemClick(item.id)}
      isClicked={item.isClicked}
      className={item.isClicked ? 'animated' : ''}
    >
      <Title>
        <span>{item.school}</span>
        {item.isClicked && (
          <span>
            {isButtonClicked ? '(Dark Theme)' : '(Light Theme)'}
          </span>
        )}
      </Title>
      <Main>{item.degree}</Main>
      {item.id === 1 || item.id === 2 || item.id === 3 ? (
        <>
          <Main>Year: {item.year}</Main>
          <Main>Percentage: {item.percentage}</Main>
        </>
      ) : null}
    </EducationBox>
  ))}
</EducationContainer>;
      </MainContainer>
      <LogoComponent theme='light'/>
      <SocialIcons theme="light" />
      {/* <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate> */}

      <BigTitle text="EDUCATION" top="50%" right="30%" />
     
    </ThemeProvider>
  );
};


export default Educationlist;
