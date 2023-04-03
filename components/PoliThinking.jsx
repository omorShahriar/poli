function PoliThinking() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" w-14 h-14 mt-3"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 112 112"
    >
      <circle cx="84" cy="50" r="10" fill="#0a0a0a">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.5555555555555556s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="6;0"
        ></animate>
        <animate
          attributeName="fill"
          begin="0s"
          calcMode="discrete"
          dur="2.2222222222222223s"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="#0a0a0a;#28292f;#0a0a0a;#28292f;#0a0a0a"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#0a0a0a">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;6;6;6"
        ></animate>
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#28292f">
        <animate
          attributeName="r"
          begin="-0.5555555555555556s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;6;6;6"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.5555555555555556s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#0a0a0a">
        <animate
          attributeName="r"
          begin="-1.1111111111111112s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;6;6;6"
        ></animate>
        <animate
          attributeName="cx"
          begin="-1.1111111111111112s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#28292f">
        <animate
          attributeName="r"
          begin="-1.6666666666666665s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;6;6;6"
        ></animate>
        <animate
          attributeName="cx"
          begin="-1.6666666666666665s"
          calcMode="spline"
          dur="2.2222222222222223s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
    </svg>
  );
}

export default PoliThinking;
