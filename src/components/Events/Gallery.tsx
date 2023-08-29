import React, { FC, useState } from "react";
import { backendURL } from "../../context";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";

interface GalleryProps {
  eventData: Event;
}

const Gallery: FC<GalleryProps> = ({ eventData }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage("");
  };

  return (
    <>
      {eventData && eventData.images.length > 0 && (
        <>
          <Spacer height={40} />
          <div className={`${classes.column} ${classes.column1Box}`}>
            <div className={`${classes.column} ${classes.column1Wrapper}`}>
              <div className={classes.columnTitle}>Gallery</div>
              <Spacer height={40} />

              <div className={classes.galleryContainer}>
                {eventData.images.map((image, index) => (
                  <div className={`${classes.galleryColumn} col-md-4`}>
                    <img
                      key={index}
                      src={`${backendURL}/assets/images/events/${image}`}
                      alt={` ${index + 1}`}
                      style={{ maxWidth: "100%", height: "auto" }}
                      onClick={() => openImage(image)}
                    />
                  </div>
                ))}
                {selectedImage !== "" && (
                  <div className={`${classes.modal} modal`}>
                    <div className={`${classes.modalWrapper}`}>
                      <div className={`${classes.modalContent}`}>
                        <span
                          className={`${classes.close}`}
                          onClick={closeImage}
                        >
                          &times;
                        </span>
                        <img
                          src={`${backendURL}/assets/images/events/${selectedImage}`}
                          alt="Selected"
                          onClick={closeImage}
                          className={`${classes.modalPhoto}`}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
