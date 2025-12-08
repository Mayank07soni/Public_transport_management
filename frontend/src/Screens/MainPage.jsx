import React, { useEffect, useState } from 'react'
import TransportCard from '../components/TransportCard'
import { redirect } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const MainPage = () => {
  const images = ["https://th.bing.com/th/id/OIP.QVBY30VqTi-tlYt_BaoGqAHaEo?w=260&h=181&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);
  return (
    <div style={{ minHeight: "100vh",background:"lightgray" }}>
      <Header />
      <div style={{minHeight:"85vh" , paddingTop:"5px"}}>
        <div style={{  backgroundColor: "grey", height: "35vh", margin: "20px", position: "relative", border: "2px", borderRadius: "0.75rem", borderColor: "white", boxShadow:"initial" }}>

          <img src={currentImage}
            alt="Image"
            style={{ width: "100%", height: "100%", objectFit: "cover", border: "2px", borderRadius: "0.75rem", borderColor: "white" }} />

          <div>
            <input type="text" placeholder="Search..."
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }} />
          </div>

        </div>

        <TransportCard />
        <Button innerText="More"/>
      </div>
      <Footer />
    </div>

  )
}

export default MainPage