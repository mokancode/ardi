// TrapeziusShape.css styles file is in styles folder
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";
export default function TrapeziusShape(props) {
  const { iconBgColor1, iconBgColor2, index } = props;

  const [id, setId] = useState(uuidv4());

  const { isIconContainer, showComponent } = props;

  return (
    <div
      className={classnames("trapeziusSVGWrapper", {
        show: showComponent,
      })}
    >
      <div
        className={classnames("bubblesWrapper", {
          type2: index && index % 2 !== 0,
          show: showComponent,
        })}
      >
        <div className="bubble" style={{ backgroundColor: iconBgColor1 }}></div>
        <div className="bubble" style={{ backgroundColor: iconBgColor2 }}></div>

        <div className="bubble fireWork" style={{ backgroundColor: iconBgColor1 }}></div>
        <div className="bubble fireWork" style={{ backgroundColor: iconBgColor2 }}></div>
      </div>
      <svg className="trapeziusSVG" x="0px" y="0px" viewBox="0 0 552 619" style={{ enableBackground: "new 0 0 552 619" }}>
        <linearGradient id={`trapeziusShapeLinearGradient_${id}`} gradientTransform="rotate(20)">
          <stop offset="10%" stopColor={iconBgColor1} />
          <stop offset="90%" stopColor={iconBgColor2} />
        </linearGradient>

        <g>
          <clipPath id="clipPath2">
            <path
              className="trapPath"
              d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
    c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
    c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
            />
          </clipPath>

          <path
            fill={`url(#trapeziusShapeLinearGradient_${id})`}
            className="trapPath"
            d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
    c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
    c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
          />

          {isIconContainer && (
            <path
              className={classnames("trapPath", {
                isIcon: "isIcon",
              })}
              d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
      c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
      c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
            />
          )}
          {isIconContainer && (
            <path
              fill={`url(#trapeziusShapeLinearGradient_${id})`}
              className={classnames("trapPath", {
                isIcon: "isIcon",
              })}
              d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
        c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
        c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
            />
          )}

          <foreignObject clipPath="url(#clipPath2)" width="100%" height="100%">
            <div className={"gradientShapeTrap"}></div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
