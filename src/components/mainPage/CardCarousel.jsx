
import React, { useState } from 'react';
import { cardImages } from './cardImages';
import '../../css/main.css';
import '../../css/bootstrap.min.css';

const CardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = cardImages.length;

  const goLeft = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goRight = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="card-carousel-container" style={{ width: '99vw', margin: '0 auto', padding: 0, position: 'relative' }}>
      <button
        aria-label="Previous"
        onClick={goLeft}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.3)',
          color: '#fff',
          border: 'none',
          fontSize: 32,
          width: 40,
          height: 60,
          cursor: 'pointer',
          zIndex: 2,
          borderRadius: '0 8px 8px 0'
        }}
      >
        &#8592;
      </button>
      <div style={{
        background: '#fff',
        borderRadius: 0,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        padding: 0,
        minHeight: '90vh',
        width: '99vw',
        overflow: 'hidden',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          className="d-block"
          src={cardImages[current]}
          alt={`Card ${current + 1}`}
          style={{ width: '99vw', height: '90vh', objectFit: 'contain', borderRadius: 0, marginBottom: 0, background: '#fff' }}
        />
        {/* Removed card label text at the bottom */}
      </div>
      <button
        aria-label="Next"
        onClick={goRight}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.3)',
          color: '#fff',
          border: 'none',
          fontSize: 32,
          width: 40,
          height: 60,
          cursor: 'pointer',
          zIndex: 2,
          borderRadius: '8px 0 0 8px'
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default CardCarousel;
