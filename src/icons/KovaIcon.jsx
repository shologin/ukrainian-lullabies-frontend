import * as React from "react";
import { useSelector } from "react-redux";
import { getLightTheme } from "../redux/theme/themeSelectors";
import classNames from "classnames";

function KovaIcon(props) {
  const isLightTheme = useSelector(getLightTheme);
  return (
    <svg
      className={classNames("", {
        "fill-for-dark": !isLightTheme,
        "fill-for-light": isLightTheme,
      })}
      width="220"
      height="80"
      viewBox="0 0 202 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32.312 15.312C31.7147 16.6773 30.712 17.8293 29.304 18.768C27.896 19.664 26.3813 20.1973 24.76 20.368V20.624C27.2347 20.752 29.304 21.2427 30.968 22.096C32.632 22.9493 33.9547 24.1867 34.936 25.808L40.568 34.896H48.44V42H34.808L26.424 27.984C25.9547 27.1733 25.336 26.5333 24.568 26.064C23.8427 25.552 22.8613 25.296 21.624 25.296H19.192V22.16L13.24 28.112H17.144V34.896H24.376V42H0.76V34.96H8.568V28.112H12.6L6.328 21.84L12.6 15.568H8.568V9.36H0.76V2.256H24.376V9.296H17.144V15.568H13.24L19.192 21.52V18.512H20.152C21.9013 18.512 23.2453 17.5733 24.184 15.696L28.088 7.632C29.1973 5.328 30.5627 3.55733 32.184 2.32C33.848 1.08266 35.7893 0.463997 38.008 0.463997C39.288 0.463997 40.4613 0.698664 41.528 1.168C42.6373 1.59467 43.5973 2.21333 44.408 3.024C45.2187 3.792 45.8373 4.752 46.264 5.904C46.7333 7.01333 46.968 8.22933 46.968 9.552C46.968 10.704 46.7547 11.984 46.328 13.392C45.9013 14.8 45.3253 16.0587 44.6 17.168H36.152C36.536 16.6987 36.92 16.1653 37.304 15.568C37.688 14.928 38.0293 14.288 38.328 13.648C38.6693 13.008 38.9467 12.3893 39.16 11.792C39.3733 11.152 39.48 10.6187 39.48 10.192C39.48 9.552 39.288 9.04 38.904 8.656C38.5627 8.272 38.0933 8.08 37.496 8.08C37.0267 8.08 36.5787 8.22933 36.152 8.528C35.768 8.82667 35.4053 9.21067 35.064 9.68C34.7653 10.1067 34.4667 10.5973 34.168 11.152C33.912 11.664 33.6773 12.176 33.464 12.688L32.312 15.312ZM89.3285 22.096C89.3285 20.2613 88.9872 18.5547 88.3045 16.976C87.6645 15.3547 86.7685 13.9467 85.6165 12.752C84.4645 11.5573 83.1205 10.6187 81.5845 9.936C80.0485 9.25333 78.4058 8.912 76.6565 8.912C74.9072 8.912 73.2645 9.25333 71.7285 9.936C70.1925 10.6187 68.8485 11.5573 67.6965 12.752C66.5445 13.9467 65.6272 15.3547 64.9445 16.976C64.3045 18.5547 63.9845 20.2613 63.9845 22.096C63.9845 23.9307 64.3045 25.6587 64.9445 27.28C65.6272 28.8587 66.5445 30.2453 67.6965 31.44C68.8485 32.6347 70.1925 33.5733 71.7285 34.256C73.2645 34.9387 74.9072 35.28 76.6565 35.28C78.4058 35.28 80.0485 34.9387 81.5845 34.256C83.1205 33.5733 84.4645 32.6347 85.6165 31.44C86.7685 30.2453 87.6645 28.8587 88.3045 27.28C88.9872 25.6587 89.3285 23.9307 89.3285 22.096H98.1605C98.1605 24.9547 97.5845 27.6427 96.4325 30.16C95.3232 32.6773 93.7872 34.896 91.8245 36.816C89.9045 38.6933 87.6432 40.1867 85.0405 41.296C82.4378 42.3627 79.6432 42.896 76.6565 42.896C73.6698 42.896 70.8752 42.3627 68.2725 41.296C65.6698 40.1867 63.3872 38.6933 61.4245 36.816C59.5045 34.896 57.9685 32.6773 56.8165 30.16C55.7072 27.6427 55.1525 24.9547 55.1525 22.096C55.1525 19.2373 55.7072 16.5493 56.8165 14.032C57.9685 11.5147 59.5045 9.31733 61.4245 7.44C63.3872 5.52 65.6698 4.02666 68.2725 2.96C70.8752 1.85066 73.6698 1.296 76.6565 1.296C79.6432 1.296 82.4378 1.85066 85.0405 2.96C87.6432 4.02666 89.9045 5.52 91.8245 7.44C93.7872 9.31733 95.3232 11.5147 96.4325 14.032C97.5845 16.5493 98.1605 19.2373 98.1605 22.096H89.3285ZM76.6565 28.688L83.2485 22.096L76.6565 15.504L70.0645 22.096L76.6565 28.688ZM135.344 15.056L140.208 9.36H132.208V2.32H156.08V9.36H149.616L140.656 19.856L138.416 17.872L139.312 26.576L130.608 27.408L132.912 29.328L122.032 42H119.28L111.408 9.36H102.576V2.32H127.216V9.36H119.984L124.528 28.176L127.472 24.72L129.904 26.768L129.008 18.192L137.712 17.232L135.344 15.056ZM173.803 33.36C172.822 36.5173 171.392 39.0347 169.515 40.912C167.68 42.7893 165.312 43.728 162.411 43.728C161.131 43.728 159.915 43.4933 158.763 43.024C157.654 42.5973 156.672 41.9787 155.819 41.168C155.008 40.3147 154.368 39.312 153.899 38.16C153.43 36.9653 153.195 35.664 153.195 34.256C153.195 33.104 153.408 31.9307 153.835 30.736C154.262 29.4987 154.838 28.2827 155.563 27.088H164.459C163.99 27.5573 163.52 28.0907 163.051 28.688C162.624 29.2427 162.24 29.84 161.899 30.48C161.558 31.0773 161.28 31.696 161.067 32.336C160.854 32.9333 160.747 33.488 160.747 34C160.747 34.64 160.918 35.152 161.259 35.536C161.643 35.92 162.134 36.112 162.731 36.112C163.286 36.112 163.798 35.92 164.267 35.536C164.736 35.152 165.142 34.6827 165.483 34.128C165.867 33.5307 166.187 32.8693 166.443 32.144C166.742 31.4187 166.998 30.736 167.211 30.096L170.859 18.448C171.158 17.5093 171.542 16.5493 172.011 15.568C172.523 14.5867 173.099 13.6907 173.739 12.88C174.379 12.0693 175.083 11.3867 175.851 10.832C176.619 10.2347 177.408 9.82933 178.219 9.616V9.36H164.523V2.256H194.155V16.784H190.123L196.395 23.056L190.123 29.328H194.155V34.896H201.963V42H178.347V34.896H185.579V29.328H189.483L183.915 23.76V26.768H175.851L173.803 33.36ZM183.915 19.664V22.352L189.483 16.784H185.579V9.36H184.363C182.998 10 181.867 11.024 180.971 12.432C180.075 13.84 179.35 15.44 178.795 17.232L178.027 19.664H183.915Z" />
    </svg>
  );
}

export default KovaIcon;
