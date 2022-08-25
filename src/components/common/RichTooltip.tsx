import React, { ReactElement } from "react";
import {
  Box,
  ClickAwayListener,
  Fade,
  makeStyles,
  Paper,
  Popper,
  PopperPlacementType,
} from "@material-ui/core";

interface Props {
  content: ReactElement;
  children: ReactElement;
  open: boolean;
  onClose?: () => void;
  arrow?: boolean;
  placement?: PopperPlacementType;
}

const useStyles = makeStyles((theme) => {
  const color = theme.palette.background.paper;
  return {
    popoverRoot: {
      backgroundColor: color,
      maxWidth: 1000,
      boxShadow: "0px 1px 7px 0px #999999",
    },
    content: {
      padding: "15px",
      marginTop: "18px",
    },
    popper: {
      zIndex: 2000,
      '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        paddingTop: "4.3px",
        marginLeft: -6,
        marginRight: 4,
        "&::before": {
          transformOrigin: "0 100%",
        },
      },
    },
    arrow: {
      overflow: "hidden",
      position: "absolute",
      width: "3em",
      boxSizing: "border-box",
      color,
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "1.3em",
        height: "0.85em",
        boxShadow: "0px 0px 7px 0px #999999",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)",
      },
    },
  };
});

const RichTooltip = ({
  placement = "top",
  arrow = true,
  open,
  onClose = () => {},
  content,
  children,
}: Props) => {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);
  const [childNode, setChildNode] = React.useState<HTMLElement | null>(null);

  return (
    <div>
      {React.cloneElement(children, { ...children.props, ref: setChildNode })}
      <Popper
        open={open}
        anchorEl={childNode}
        placement={placement}
        transition
        className={classes.popper}
        modifiers={{
          preventOverflow: {
            enabled: true,
            boundariesElement: "window",
          },
          arrow: {
            enabled: arrow,
            element: arrowRef,
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <ClickAwayListener onClickAway={onClose}>
                <Paper className={classes.popoverRoot}>
                  {arrow ? (
                    <span className={classes.arrow} ref={setArrowRef} />
                  ) : null}
                  <Box className={classes.content}>{content}</Box>
                </Paper>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default RichTooltip;
