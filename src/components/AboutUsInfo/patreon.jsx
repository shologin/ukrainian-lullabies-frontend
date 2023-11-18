import classNames from "classnames";
import * as React from "react";
import { useSelector } from "react-redux";
import "./AboutUsInfo.css";

const Patreon = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  return (
    <svg
      className={classNames("patreon_dark", {
        patreon_light: isLightTheme,
      })}
      width="100"
      height="56"
      viewBox="0 0 100 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="88" height="44" transform="translate(6 6)" fill="white" />
      <path
        d="M78.1762 24.204H80V32.1343H78.0855L75.2301 27.0361V32.1343H73.3947V24.204H75.3092L78.1762 29.37V24.204ZM66.1556 24C68.7837 24 70.3473 25.994 70.3473 28.1692C70.3473 30.3443 68.7837 32.3384 66.1556 32.3384C63.5157 32.3384 61.9521 30.3443 61.9521 28.1692C61.9521 25.994 63.5157 24 66.1556 24ZM68.4783 28.1692C68.4783 26.8664 67.5942 25.6541 66.1556 25.6541C64.7053 25.6541 63.8332 26.8664 63.8332 28.1692C63.8332 29.472 64.7053 30.6842 66.1556 30.6842C67.5942 30.6842 68.4783 29.472 68.4783 28.1692ZM36.5184 25.79V24.204H41.9447V25.79H40.1433V32.1343H38.308V25.79H36.5184ZM55.9707 27.478H58.9728V28.9171H55.9707V30.6614H58.9728V32.1343H54.1353V24.204H58.9728V25.677H55.9707V27.478ZM48.1308 24.204C49.8866 24.204 51.0197 25.5297 51.0197 27.0704C51.0197 28.1806 50.4304 29.166 49.4445 29.6307L51.031 32.1343H48.9012L47.4959 29.9363H46.6348V32.1343H44.7997V24.204H48.1308ZM49.1614 27.0704C49.1614 26.3339 48.6628 25.6994 47.8925 25.6994H46.6348V28.4409H47.8925C48.6628 28.4409 49.1614 27.8068 49.1614 27.0704ZM32.927 31.1714H30.1059L29.7999 32.1343H27.8398L30.6723 24.204H32.3602L35.2266 32.1343H33.2326L32.927 31.1714ZM31.5218 26.4698L30.5474 29.7327H32.4733L31.5218 26.4698ZM23.3193 24.204C25.0754 24.204 26.2085 25.5297 26.2085 27.0704C26.2085 28.611 25.0754 29.9363 23.3193 29.9363H21.8353V32.1343H20V24.204H23.3193ZM24.3618 27.0704C24.3618 26.3339 23.8632 25.6994 23.0928 25.6994H21.8353V28.4409H23.0928C23.8632 28.4409 24.3618 27.8068 24.3618 27.0704Z"
        fill="#141518"
      />
    </svg>
  );
};
export default Patreon;
