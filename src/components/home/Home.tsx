import Header from "./Header";
import Category from "./Category";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div
      className="home-background"
      style={isMobile ? { paddingBottom: "120px" } : { paddingBottom: "90px" }}
    >
      <Header />
      <Category />
    </div>
  );
}
