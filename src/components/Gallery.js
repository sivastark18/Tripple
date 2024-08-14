// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import gallery from "./images/g8.jpg";
import gal1 from "./images/g1.jpg";
import gal2 from "./images/g2.jpg";
import gal3 from "./images/g3.jpg";
import gal4 from "./images/g4.jpg";
import gal5 from "./images/g5.jpg";
import gal6 from "./images/g6.jpg";
import gal7 from "./images/g7.jpg";
import gal9 from "./images/g9.jpg"; // Add this new import

function Gallery() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const images = [
      { src: gallery, title: "Sprint Showdown", description: "A short, high-intensity sprint race with a focus on acceleration and power." },
      { src: gal1, title: "Mountain Majesty", description: "A 5-day trip through the Rocky Mountains, exploring scenic trails and challenging climbs." },
      { src: gal2, title: "Caffeine Cruise", description: "A 25-mile ride along a scenic bike path, with a cafe stop and lake views." },
      { src: gal3, title: "City Explorer", description: "A 1-day trip through urban streets, discovering hidden gems and local culture." },
      { src: gal4, title: "Tour de Force", description: "A 100-mile road race with challenging climbs and high-speed descents." },
      { src: gal5, title: "Mountain Mocha", description: "A 25-mile ride to a mountainous area, with a stop at a cafe with a scenic view." },
      { src: gal6, title: "GearGrind", description: "A 2-day rally with mountain bike rides, gear demos, and bike maintenance clinics." },
      { src: gal7, title: "Endurance Extreme", description: "A 200-mile endurance race with varied terrain and demanding conditions." },
      { src: gal9, title: "Scenic Spin", description: "A leisurely 30-mile ride through picturesque countryside with stunning vistas." }, // New image
    ];

    // Shuffle function
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setShuffledImages(shuffleArray(images));
  }, []);

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {shuffledImages.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={image.src} alt={image.title} />
              </div>
              <div className="card-back">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;