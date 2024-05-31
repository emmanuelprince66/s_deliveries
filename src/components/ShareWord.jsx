import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import xLogo from "../images/xLogo.svg";
import outLook from "../images/outLookLogo.svg";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const ShareWord = ({ word, meaning }) => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // adjust the breakpoint as needed

  console.log(word, meaning);
  // Use a placeholder URL for testing
  const shareUrl = "https://s-deliveries.vercel.app";
  
  const mailtoLink = `mailto:?subject=${encodeURIComponent(word)}&body=${encodeURIComponent(meaning + " " + shareUrl)}`;

  const style = {
    position: "fixed", // Use fixed positioning
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: isMobile ? "90%" : "100%", // Adjust width for mobile and desktop
    bgcolor: "background.paper",
    p: 3,
  };

  return (
    <Box>
      <div className="bg-[#1d1d1d] rounded-lg mx-auto flex justify-center items-center border border-[#444444] shadow-lg p-2 w-full">
        <div className="share-button w-full h-full block md:flex justify-between md:items-center">
          <div className="mb-2 md:mb-0">
            <a href={mailtoLink}>
              <img src={outLook} alt="out-look" />
            </a>
          </div>

          <div className="mb-2 md:mb-0">
            <WhatsappShareButton
              url={shareUrl}
              title={`${word}\n${meaning}`}
              separator=" "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="mb-2 md:mb-0">
            <TwitterShareButton
              url={shareUrl}
              title={`${word}: ${meaning}`}
              via="YourTwitterHandle" // Optional: Your Twitter handle
              hashtags={[word]}
            >
              <img src={xLogo} alt="twitter" />
            </TwitterShareButton>
          </div>

          <div className="mb-2 md:mb-0">
            <FacebookShareButton
              url={shareUrl}
              quote={`${word}: ${meaning}`}
              hashtag={`#${word}`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div >
            <LinkedinShareButton url={shareUrl} title={word} summary={meaning}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ShareWord;
