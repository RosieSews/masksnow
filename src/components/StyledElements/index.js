import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIconLink = styled.a`
  &&& {
    height: 50px;
    width: 50px;
    margin: 16px;
    border-radius: 33%;
    border: 3px white solid;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${({color, background}) => background || color};
    -webkit-transition: background-color 0.25s ease-out;
    -moz-transition: background-color 0.25s ease-out;
    -o-transition: background-color 0.25s ease-out;
    transition: background-color 0.25s ease-out;
    &:hover {
      color: ${props => props.color};
      background: white;
    }
    &:active {
      color: white;
    background: ${({color, background}) => background || color};
    }
  }
`;
const DEFAULT_SOCIAL_ICON_SIZE = "2x";
export const FacebookBrandIcon = ({ size = DEFAULT_SOCIAL_ICON_SIZE }) => {
  return <FontAwesomeIcon icon={faFacebook} size={size} />;
};

export const FacebookLinkIcon = ({ size }) => (
  <SocialMediaIconLink
    href="https://www.facebook.com/groups/masksnoworg"
    target="_blank"
    color="#3B5998"
  >
    <FacebookBrandIcon size={size} />
  </SocialMediaIconLink>
);

export const InstagramBrandIcon = ({ size = DEFAULT_SOCIAL_ICON_SIZE }) => {
  return <FontAwesomeIcon icon={faInstagram} size={size} />;
};

export const InstagramLinkIcon = ({ size }) => (
  <SocialMediaIconLink
    href="https://www.instagram.com/masksnoworg"
    target="_blank"
    color="black"
    background="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
  >
    <InstagramBrandIcon size={size} />
  </SocialMediaIconLink>
);

export const TwitterBrandIcon = ({ size = DEFAULT_SOCIAL_ICON_SIZE }) => {
  return <FontAwesomeIcon icon={faTwitter} size={size} />;
};

export const TwitterLinkIcon = ({ size }) => (
  <SocialMediaIconLink
    href="https://twitter.com/masksnoworg"
    target="_blank"
    color="#1da1f2"
  >
    <TwitterBrandIcon size={size} />
  </SocialMediaIconLink>
);
