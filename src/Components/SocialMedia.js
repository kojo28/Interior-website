import React from "react";
import { ImInstagram, ImTwitter, ImGithub } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/kojo28" target="_blank" rel="noreferrer">
            <ImGithub />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};
// cmd + shift + p for prettier extension format
export default SocialMedia;
