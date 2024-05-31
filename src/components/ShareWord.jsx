import React from "react";
import { Box} from "@mui/material";
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
  
      const mailtoLink = `mailto:?subject=${encodeURIComponent(
        word
      )}&body=${encodeURIComponent(meaning + " " + shareUrl)}`;

  const style = {
    position: "absolute",
    top: isMobile ? "46%" : "54%",
    left: "68%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width:isMobile ? "70%" :"63%",
    bgcolor: "background.paper",
    p: 3,
  };

  return (
    <Box style={style}>
      <div className="bg-[#1d1d1d] rounded-lg mx-auto flex justify-center items-center border border-[#444444] shadow-lg p-2 w-[90%] md:w-[45%] lg:w-[25%]">
        <div className="share-button w-full flex justify-between items-center">
          <FacebookShareButton
            url={shareUrl}
            quote={`${word}: ${meaning}`}
            hashtag={`#${word}`}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={`${word}: ${meaning}`}
            via="YourTwitterHandle" // Optional: Your Twitter handle
            hashtags={[word]}
          >
          <img src={xLogo} alt="twitter" />
          </TwitterShareButton>

          <LinkedinShareButton url={shareUrl} title={word} summary={meaning}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={`${word}\n${meaning}`}
            separator=" "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          
          <a href={mailtoLink}>
          <img src={outLook} alt="out-look" />
          </a>
          
        </div>
      </div>
    </Box>
  );
};

export default ShareWord;
