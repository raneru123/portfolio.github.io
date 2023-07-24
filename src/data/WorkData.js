// work data
import React from "react";




const WorkList = () => {
  return (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      {Work.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <ul>
            {item.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div>
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkList;

export const Work = [
    {
        "id": 1,
        "name": "All in one booking system",
        "description": "Streamline your bookings with our all-in-one booking system – the perfect solution for effortless scheduling and seamless reservations.",
        "tags": ["HTML", "CSS", "PHP" ,"MYSQL"],
        "demo": "https://github.com/raneru123/",
        "github": "https://github.com/raneru123"
    },
    
    {
        id:2,
        name:"Travel to Explore",
        description:"Passionate wanderer embracing the world's wonders, one adventure at a time..",
        tags:["MERN STACK"],
        
        demo:"https://github.com/raneru123/",
        github:"https://github.com/raneru123"
        
    },
    {
        id:3,
        name:"E-Commerce",
        description:"Empowering holistic health through ancient wisdom and modern convenience. Discover the essence of Ayurveda with our curated selection of natural remedies and wellness products.",
        tags:["HTML","CSS","PHP","JAVASCRIPT","MYSQL"],
        
        demo:"https://github.com/raneru123/",
        github:"https://github.com/raneru123"
    },
    {
        id:4,
        name:"Understanding Sign Language",
        description:"Interpreting silence, speaking through hands – bridging worlds with sign language.",
        tags:["MACHINELEARINING","PYTHON"],
        
        demo:"https://github.com/raneru123",
        github:"https://github.com/raneru123"
       
    },{
        id:5,
        name:"ENCRYPTION AND DECRYPTION",
        description:"Passionate about data security - an expert in encryption and decryption.",
        tags:["python"],
        
        demo:"https://github.com/raneru123",
        github:"https://github.com/raneru123"
        
    },
    {
        id:6,
        name:"doctors appointment",
        description:"Compassionate care, dedicated to healing.",
        tags:["mern stack"],
        
        demo:"https://github.com/raneru123",
        github:"https://github.com/raneru123"
        
    },
    
  
] 