import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ImageGallery from "react-image-gallery";
import galleryImage1 from "../../img/galleryImage1.jpg";
import galleryImage2 from "../../img/galleryImage2.jpg";
import galleryImage3 from "../../img/galleryImage3.jpg";

const images = [
  {
    original: galleryImage1,
  },
  {
    original: galleryImage2,
  },
  {
    original: galleryImage3,
  },
];

export default function Footer() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div style={{ backgroundColor: "#f3f3f3" }} className="footer">
      <Grid
        container
        style={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        {!isMobile && (
          <Grid item sm={6} style={{ flexBasis: "auto" }}>
            <div className="footer-link">
              <div>ABOUT</div>
              <div>HELP</div>
              <div>SHOP</div>
            </div>
          </Grid>
        )}
        <Grid item sm={6} style={{ flexBasis: "auto" }}>
          <div className="follow-us-text">Follow us on Instagram</div>
          <div className={isMobile ? "" : "image-galley"}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
            />
          </div>
        </Grid>
        {isMobile && (
          <Grid item sm={6} style={{ flexBasis: "auto" }}>
            <div className="footer-link">
              <div>ABOUT</div>
              <div>HELP</div>
              <div>SHOP</div>
            </div>
          </Grid>
        )}
      </Grid>
      <div className="footer-credit">
        ©2022 JDY
      </div>
    </div>
  );
}
