// BlogPage.js

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from "../subComponents/BigTitlte";
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import BlogComponent from './BlogComponent';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  // Assuming you have defined the Blogs array here with public image URLs
  const Blogs = [
    {
      id: 1,
      name: "Certificate 1",
      tags: ["Coursera", "C"],
      date: "C Programming.",
      imgSrc: "https://i.imgur.com/5olQZHN.png",
      link: "https://example.com/blog1",
    },
    {
      id: 2,
      name: "Certificate 2",
      tags: ["Google cloud", "Google"],
      date: "Cloud Computing",
      imgSrc: "https://i.imgur.com/JXU7gpW.png",
      link: "https://example.com/blog2",
    },
    {
      id: 3,
      name: "Certificate 3",
      tags: ["Great learning", "CSS","Web Development"],
      date: "Front End Development",
      imgSrc: "https://i.imgur.com/yckuGd6.png",
      link: "https://example.com/blog2",
    },
    {
      id: 4,
      name: "Certificate 4",
      tags: ["Coursera", "Hacking"],
      date: "Ethical Hacking Essentials",
      imgSrc: "https://i.imgur.com/Q0VcQYy.png",
      link: "https://example.com/blog2",
    },
    {
      id: 5,
      name: "Certificate 5",
      tags: ["Iot", "Coursera"],
      date: "Iot Platforms",
      imgSrc: "https://i.imgur.com/Xi18Lqr.png",
      link: "https://example.com/blog2",
    },
    {
      id: 6,
      name: "Certificate 6",
      tags: ["Coursera","Python","Raspberry Pi"],
      date: "Rapberrypi With Python Programming ",
      imgSrc: "https://i.imgur.com/68P06XZ.png",
      link: "https://example.com/blog2",
    },
    {
      id: 7,
      name: "Certificate 7",
      tags: ["Cognitive","Data Science","Python"],
      date: "Python and Data Science",
      imgSrc: "https://i.imgur.com/C7DkaGJ.png",
      link: "https://example.com/blog2",
    },
    {
      id: 8,
      name: "Certificate 8",
      tags: ["Great Learning","Algorithms","Java",],
      date: "Algorithms in Java and Data Structure",
      imgSrc: "https://i.imgur.com/raZfwl5.png",
      link: "https://example.com/blog2",
    },
    
    
    // Add more blog entries as needed
  ];

  return (
    <MainContainer variants={container} initial='hidden' animate='show' exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map(blog => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="CERTIFICATES" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;