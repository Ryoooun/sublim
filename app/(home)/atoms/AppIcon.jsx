import React from "react";

const AppIcon = React.memo((props) => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      {...props}>
      <circle
        cx={256.872}
        cy={158.49}
        r={137.134}
        style={{
          fill: "#00834ec0",
        }}
        transform="matrix(.9334 0 0 .9334 -111.763 -19.934)"
      />
      <path
        d="M157.984 41.216c-1.325 7.048 11.022 17.439 4.735 24.024-6.217 6.512-19.056-7.925-18.896-21.177.255-21.204 13.088-29.026 24.617-28.665 16.096.504 31.066 17.162 31.038 41.159-.023 19.151-10.711 28.933-19.46 28.979-.16-.335 31.412 24.493 56.344.534 19.754-18.984 34.093-5.874 28.307 16.857-5.503 21.617-23.568 27.484-34.648 24.256-20.564-5.99-36.368-17.747-46.277-24.256-7.736-5.082-26.035-7.952-29.167-7.857-25.705.777-55.712 15.015-55.712 56.915 0 32.068 23.148 59.179 47.305 59.137 22.583-.04 46.048-14.997 46.771-50.285.551-26.848-20.318-32.58-28.356-32.873-19.888-.724-30.329 14.778-30.084 25.187.47 19.891 8.555 25.219 14.1 25.232 3.953.01 12.573-3.471 12.842-13.838.244-9.443-2.338-10.326-2.793-15.181-1.1-11.735 6.934-6.764 6.934-6.764 3.704.704 8.158 10.082 8.232 18.086.123 13.202-5.501 32.681-28.533 31.9-19.83-.672-27.214-20.338-27.379-37.39-.125-12.898 10.019-47.163 44.997-46.881 1.34.011 49.19 5.322 49.121 50.758-.084 55.728-34.658 75.27-70.545 71.669-36.934-3.707-63.451-40.207-63.451-77.21 0-37.003 17.111-71.106 63.273-69.757.353.01-37.697-21.678-37.697-52.355 0-23.107 20.685-54.55 51.22-53.156C178.77-20.643 202.601.545 209.964 6.683c3.805 3.173 7.831 8.871 3.426 15.645-4.272 6.568-9.887 2.277-12.554.109C187.943 11.96 180.433 1.575 157.323.405c-21.371-1.082-33.575 14.365-34.6 32.163-1.283 22.257 15.587 42.68 34.339 44.917 11.41 1.361 22.04-4.943 24.778-16.432 3.128-13.122-.722-29.578-11.72-31.508-7.051-1.237-10.716 4.115-12.136 11.671Z"
        style={{
          fill: "#fff",
          fillRule: "nonzero",
        }}
        transform="matrix(0 1.05626 -.87824 0 219.484 -43.874)"
      />
    </svg>
  );
});

export default AppIcon;
