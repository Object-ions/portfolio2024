import { useEffect, useCallback } from 'react';

const ImageModal = ({ image, closeImage }) => {
  const handleOutsideClick = useCallback(
    (event) => {
      if (event.target.classList.contains('image-modal')) {
        closeImage();
      }
    },
    [closeImage]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImage();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOutsideClick, closeImage]);

  return (
    <div className="image-modal" onClick={handleOutsideClick}>
      <button onClick={closeImage} className="close-button">
        X
      </button>
      <img src={image} alt="Enlarged view" className="enlarged-image" />
    </div>
  );
};

export default ImageModal;
