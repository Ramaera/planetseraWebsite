import { useEffect, useState } from "react";
import disableScroll from "disable-scroll";
import {
  Button,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Share as ShareIcon,
  Facebook,
  Twitter,
  WhatsApp,
  Pinterest,
  FileCopy,
  TaskAlt,
} from "@mui/icons-material";

const ShareLinkProduct = ({ IconSahre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const openShareBox = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const closeShareBox = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen ? disableScroll.on() : disableScroll.off();
  }, [isOpen]);

  const currentPageUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentPageUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentPageUrl
      )}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(currentPageUrl)}`,
      "_blank"
    );
  };

  const shareOnPinterest = () => {
    window.open(
      `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        currentPageUrl
      )}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.toString());
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div onClick={openShareBox} className="cursor-pointer">
        {IconSahre}
      </div>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={closeShareBox}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            marginLeft: "-1.2% !important",
          },
        }}>
        <List className="py-0">
          <ListItem
            onClick={shareOnFacebook}
            className="cursor-pointer border-b-[1px] border-[#ccc] py-[2px] sm:py-[4px] px-[10px] sm:px-[12px]   hover:text-[#2196f3]">
            <ListItemIcon className="min-w-[40px]">
              <Facebook style={{ color: "#2196f3" }} />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem
            onClick={shareOnTwitter}
            className="cursor-pointer border-b-[1px] border-[#ccc] py-[2px] sm:py-[4px] px-[10px] sm:px-[12px]  hover:text-[#807f7f]">
            <ListItemIcon className="min-w-[40px]">
              <img
                src="/images/backgrounds/x-twitter-logo.png"
                style={{
                  color: "#1769aa",
                  width: "1.1em",
                  height: "1.1em",
                  marginLeft: "4px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="X" />
          </ListItem>
          <ListItem
            onClick={shareOnWhatsApp}
            className="cursor-pointer border-b-[1px] border-[#ccc] py-[2px] sm:py-[4px] px-[10px] sm:px-[12px]   hover:text-[green]">
            <ListItemIcon className="min-w-[40px]">
              <WhatsApp style={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText primary="WhatsApp" />
          </ListItem>
          {/* <ListItem
            onClick={shareOnPinterest}
            className="cursor-pointer border-b-[1px] border-[#ccc] py-[2px] sm:py-[4px] px-[10px] sm:px-[12px]   hover:text-[red]">
            <ListItemIcon className="min-w-[40px]">
              <Pinterest style={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary="Pinterest" />
          </ListItem> */}
          <ListItem
            onClick={copyLink}
            className="cursor-pointer py-[2px] sm:py-[4px] px-[10px] sm:px-[12px]  hover:text-[orange]">
            <ListItemIcon className="min-w-[40px]">
              {isLinkCopied ? (
                <TaskAlt style={{ color: "#00e676" }} />
              ) : (
                <FileCopy style={{ color: "orange" }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={isLinkCopied ? "Link Copied!" : "Copy Link"}
            />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default ShareLinkProduct;
