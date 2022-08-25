import useMediaQuery from "@material-ui/core/useMediaQuery";

type FooterPositioningProps = {
  children: JSX.Element;
};

export default function FooterPositioning({ children }: FooterPositioningProps) {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallerThanMobile = useMediaQuery("(max-width:400px)");

  return (
    <div
      className="App"
      style={
        isSmallerThanMobile
          ? { paddingBottom: "600px" }
          : isMobile
          ? { paddingBottom: "690px" }
          : { paddingBottom: "472px" }
      }
    >
      {children}
    </div>
  );
}
