import * as React from "react";
import { useSelector } from "react-redux";
import { getLightTheme } from "../redux/theme/themeSelectors";
import classNames from "classnames";

function OundIcon(props) {
  const isLightTheme = useSelector(getLightTheme);
  return (
    <svg
      className={classNames("", {
        "fill-for-dark": !isLightTheme,
        "fill-for-light": isLightTheme,
      })}
      width="220"
      height="80"
      viewBox="0 0 214 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M35.016 21.096C35.016 19.2613 34.6747 17.5547 33.992 15.976C33.352 14.3547 32.456 12.9467 31.304 11.752C30.152 10.5573 28.808 9.61867 27.272 8.936C25.736 8.25333 24.0933 7.912 22.344 7.912C20.5947 7.912 18.952 8.25333 17.416 8.936C15.88 9.61867 14.536 10.5573 13.384 11.752C12.232 12.9467 11.3147 14.3547 10.632 15.976C9.992 17.5547 9.672 19.2613 9.672 21.096C9.672 22.9307 9.992 24.6587 10.632 26.28C11.3147 27.8587 12.232 29.2453 13.384 30.44C14.536 31.6347 15.88 32.5733 17.416 33.256C18.952 33.9387 20.5947 34.28 22.344 34.28C24.0933 34.28 25.736 33.9387 27.272 33.256C28.808 32.5733 30.152 31.6347 31.304 30.44C32.456 29.2453 33.352 27.8587 33.992 26.28C34.6747 24.6587 35.016 22.9307 35.016 21.096H43.848C43.848 23.9547 43.272 26.6427 42.12 29.16C41.0107 31.6773 39.4747 33.896 37.512 35.816C35.592 37.6933 33.3307 39.1867 30.728 40.296C28.1253 41.3627 25.3307 41.896 22.344 41.896C19.3573 41.896 16.5627 41.3627 13.96 40.296C11.3573 39.1867 9.07467 37.6933 7.112 35.816C5.192 33.896 3.656 31.6773 2.504 29.16C1.39467 26.6427 0.84 23.9547 0.84 21.096C0.84 18.2373 1.39467 15.5493 2.504 13.032C3.656 10.5147 5.192 8.31733 7.112 6.44C9.07467 4.52 11.3573 3.02666 13.96 1.96C16.5627 0.850665 19.3573 0.295998 22.344 0.295998C25.3307 0.295998 28.1253 0.850665 30.728 1.96C33.3307 3.02666 35.592 4.52 37.512 6.44C39.4747 8.31733 41.0107 10.5147 42.12 13.032C43.272 15.5493 43.848 18.2373 43.848 21.096H35.016ZM22.344 27.688L28.936 21.096L22.344 14.504L15.752 21.096L22.344 27.688ZM93.7675 26.472C93.7248 28.392 93.3408 30.2693 92.6155 32.104C91.8902 33.9387 90.7808 35.5813 89.2875 37.032C87.8368 38.4827 85.9595 39.656 83.6555 40.552C81.3942 41.448 78.6848 41.896 75.5275 41.896C72.4982 41.896 69.8528 41.4907 67.5915 40.68C65.3302 39.8267 63.4315 38.7173 61.8955 37.352C60.4022 35.9867 59.2715 34.4293 58.5035 32.68C57.7355 30.888 57.3302 29.032 57.2875 27.112V8.36H49.4795V1.256H73.0955V8.36H65.8635V27.112C65.8635 28.0933 66.0982 29.032 66.5675 29.928C67.0368 30.7813 67.6982 31.528 68.5515 32.168C69.4048 32.808 70.4075 33.32 71.5595 33.704C72.7542 34.088 74.0768 34.28 75.5275 34.28C78.7275 34.28 81.1382 33.576 82.7595 32.168C84.3808 30.7173 85.1915 28.8187 85.1915 26.472V8.36H77.9595V1.256H101.576V8.36H93.7675V26.472ZM75.5275 27.688L82.1195 21.096L75.5275 14.504L68.9355 21.096L75.5275 27.688ZM124.303 33.896H132.239V41H109.135V33.896H116.943V27.112H120.399L114.127 20.84L120.399 14.568H116.943V8.36H109.135V1.256H126.607L147.279 24.488V8.36H138.639V1.256H164.111V8.36H154.575V41H150.927L124.303 10.984V14.568H121.039L127.311 20.84L121.039 27.112H124.303V33.896ZM213.863 21.096C213.863 23.9547 213.287 26.6 212.135 29.032C210.983 31.464 209.426 33.576 207.463 35.368C205.5 37.1173 203.218 38.504 200.615 39.528C198.012 40.5093 195.26 41 192.359 41H172.135V33.896H179.943V27.112H183.975L177.703 20.84L183.975 14.568H179.943V8.424H172.135V1.256H192.359C195.26 1.256 198.012 1.768 200.615 2.792C203.218 3.77333 205.5 5.13867 207.463 6.888C209.426 8.63733 210.983 10.728 212.135 13.16C213.287 15.592 213.863 18.2373 213.863 21.096ZM188.519 33.832H192.359C194.023 33.832 195.623 33.512 197.159 32.872C198.695 32.232 200.039 31.3573 201.191 30.248C202.386 29.096 203.324 27.752 204.007 26.216C204.69 24.6373 205.031 22.9307 205.031 21.096C205.031 19.2613 204.69 17.576 204.007 16.04C203.324 14.4613 202.386 13.1173 201.191 12.008C200.039 10.856 198.695 9.96 197.159 9.32C195.623 8.68 194.023 8.36 192.359 8.36H188.519V14.568H184.615L190.887 20.84L184.615 27.112H188.519V33.832Z" />
    </svg>
  );
}

export default OundIcon;
