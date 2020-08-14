import React, { useState, useContext } from "react";
import Lightbox from "react-spring-lightbox";

import "./ImageMessageWithLightbox.styles.scss";
import { OverlayContext } from "../../providers/Overlay.provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const ImageMessageWithLightbox = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toggleVisible } = useContext(OverlayContext);

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevState) => prevState - 1);
    }
    return;
  };

  const goToNext = () => {
    if (currentImageIndex + 1 < images.length) {
      setCurrentImageIndex((prevState) => prevState + 1);
    }
    return;
  };

  const openImageAtIndex = (idx) => {
    setCurrentImageIndex(idx);
    setOpen(true);
    toggleVisible();
  };

  const handleClose = () => {
    setOpen(false);
    toggleVisible();
  };

  return (
    <div className="image-message-group">
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            className="image-message"
            onClick={() => openImageAtIndex(idx)}
          />
        );
      })}
      <Lightbox
        isOpen={open}
        onClose={handleClose}
        onPrev={goToPrevious}
        onNext={goToNext}
        images={images}
        currentIndex={currentImageIndex}
        singleClickToZoom
        renderImageOverlay={() => (
          <div className="lightbox-header">
            <Button
              onClick={handleClose}
              style={{ border: "none", marginRight: "5%" }}
              icon={<FontAwesomeIcon icon={faTimes} className="icon" />}
            />
          </div>
        )}
      />
    </div>
  );
};

export default ImageMessageWithLightbox;
