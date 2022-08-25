import { NavLink } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type eachItemProps = {
  category: string;
  image: string;
  name: string;
};

const ImageView = ({ category, image, name }: eachItemProps) => {
  const isMobile = useMediaQuery("(max-width:599px)");

  const images = [
    {
      original: image,
      thumbnail: image,
    },
    {
      original: image,
      thumbnail: image,
    },
    {
      original: image,
      thumbnail: image,
    },
  ];

  return (
    <div>
      <div className="product-view-category">
        <NavLink to={`/`} style={{ textDecoration: "underline" }}>
          Home
        </NavLink>
        <span> &gt; </span>
        <NavLink
          to={`/product/${category}`}
          style={{ textDecoration: "underline" }}
        >
          {category}
        </NavLink>
      </div>
      {isMobile && (
        <div className="product-view-name_mobile">{name}</div>
      )}
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={false}
        showNav={false}
      />
    </div>
  );
};

export default ImageView;
