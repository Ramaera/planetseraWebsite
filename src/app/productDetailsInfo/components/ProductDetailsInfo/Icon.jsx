const Icon = (props) => (
  <svg
    width="59"
    height="59"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3359_8253)">
      <circle cx="29.5" cy="25.5" r="25.5" fill="white" />
    </g>
    <path
      d="M14.2396 39C14.1091 39.0006 13.9794 38.9809 13.8558 38.9415C13.5972 38.8622 13.3734 38.7046 13.219 38.4932C13.0646 38.2818 12.9882 38.0282 13.0015 37.7717C13.0015 37.5962 14.2767 20.6107 32.303 19.2772V13.1708C32.3028 12.9383 32.376 12.7109 32.5132 12.5178C32.6503 12.3247 32.8453 12.1746 33.0732 12.0867C33.3011 11.9989 33.5516 11.9771 33.7926 12.0244C34.0336 12.0716 34.2542 12.1857 34.4263 12.352L46.6461 24.1435C46.8729 24.3622 47 24.6562 47 24.9624C47 25.2686 46.8729 25.5626 46.6461 25.7813L34.4263 37.5728C34.2542 37.7391 34.0336 37.8532 33.7926 37.9004C33.5516 37.9476 33.3011 37.9259 33.0732 37.8381C32.8453 37.7502 32.6503 37.6001 32.5132 37.407C32.376 37.2139 32.3028 36.9865 32.303 36.754V30.7646C20.269 31.1974 15.3352 38.3683 15.2857 38.456C15.174 38.6227 15.0195 38.7599 14.8366 38.8551C14.6537 38.9502 14.4483 39 14.2396 39ZM34.7792 16.0368V20.3709C34.7794 20.6742 34.6549 20.9657 34.432 21.184C34.2091 21.4022 33.9052 21.5301 33.5844 21.5407C21.9218 21.9443 17.7495 29.2848 16.2514 34.0049C19.3466 31.4782 24.8622 28.3899 33.4668 28.3899H33.5225C33.8509 28.3899 34.1658 28.5132 34.398 28.7325C34.6302 28.9519 34.7606 29.2495 34.7606 29.5597V33.8938L44.0461 24.9682L34.7792 16.0368Z"
      fill={props.color}
    />
    <defs>
      <filter
        id="filter0_d_3359_8253"
        x="0"
        y="0"
        width="59"
        height="59"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3359_8253"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3359_8253"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Icon;
