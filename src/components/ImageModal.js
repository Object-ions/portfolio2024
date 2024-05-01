import React from 'react';

const ImageModal = ({ image, closeImage }) => {
  return (
    <div className="image-modal">
      <button onClick={closeImage} className="close-button">
        X
      </button>
      <img src={image} alt="Enlarged" className="enlarged-image" />
    </div>
  );
};

export default ImageModal;
