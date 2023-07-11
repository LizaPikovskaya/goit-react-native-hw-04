import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function GridIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3H10V10H3V3Z" stroke="#212121" {...props} />
      <Path d="M14 3H21V10H14V3Z" stroke="#212121" {...props}></Path>
      <Path d="M14 14H21V21H14V14Z" stroke="#212121" {...props}></Path>
      <Path d="M3 14H10V21H3V14Z" stroke="#212121" {...props}></Path>
    </Svg>
  );
}

export function LogoutIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="#BDBDBD"
      />
      <Path d="M17 16L21 12L17 8" stroke="#BDBDBD"></Path>
      <Path d="M21 12H9" stroke="#BDBDBD" />
    </Svg>
  );
}
export function PlusIcon(props) {
  return (
    <Svg
      width={13}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
        fill="white"
        {...props}
      />
    </Svg>
  );
}
export function UserIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="#212121"
        {...props}
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#212121"
        {...props}
      ></Path>
    </Svg>
  );
}

export function ArrowLeft(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 12H4" stroke="#212121" {...props} />
      <Path d="M10 18L4 12L10 6" stroke="#212121" {...props}></Path>
    </Svg>
  );
}
