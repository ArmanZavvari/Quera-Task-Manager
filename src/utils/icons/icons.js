const icons = {
  flag: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M6.42146 26.0294V5.11035"
              stroke={color}
              strokeWidth="2.3897"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M23.5787 17.4754V5.19604"
              stroke={color}
              strokeWidth="2.3897"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M6.42163 17.451C6.42163 17.451 7.49393 16.5601 10.7108 16.5601C13.9277 16.5601 16.0723 18.6765 19.2892 18.6765C22.5061 18.6765 23.5784 17.4792 23.5784 17.4792"
              stroke={color}
              strokeWidth="2.3897"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M6.42163 5.11286C6.42163 5.11286 7.49393 3.9707 10.7108 3.9707C13.9277 3.9707 16.0723 6.08712 19.2892 6.08712C22.5061 6.08712 23.5784 5.19619 23.5784 5.19619"
              stroke={color}
              strokeWidth="2.3897"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  refresh: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.125 18.0585C15.7 17.1168 18.3333 13.8668 18.3333 10.0001C18.3333 5.40014 14.6333 1.66681 10 1.66681C4.44167 1.66681 1.66667 6.30014 1.66667 6.30014M1.66667 6.30014V2.50014M1.66667 6.30014H3.34167H5.36667"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66667 10.0001C1.66667 14.6001 5.4 18.3335 10 18.3335"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="3 3"
        />
      </svg>
    );
  },
  moon: (color, size) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="-140 -150 750 850"
      >
        <path
          stroke={color}
          fill={color}
          d="M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 0 0 280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z"
        />
      </svg>
    );
  },
  user_edit: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M4 20C4 17.5 6 15.5 8.5 15.5H11.1"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 21H16.3L19.7 17.6C20.1 17.2 20.1 16.6 19.7 16.2L18.8 15.3C18.4 14.9 17.8 14.9 17.4 15.3L14 18.7V21V21H14Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  user_check: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <circle
              id="Oval"
              cx="13.0001"
              cy="8.74835"
              r="4.25177"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path"
              d="M4.9967 20.5033C4.9967 18.0173 7.01254 16.0015 9.49858 16.0015H12.0827"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M20.0029 17.4399L17.0017 20.4412L15.2019 18.6404"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  user_add: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M12.5 4.33325C13.9167 5.74992 13.9167 7.99992 12.5 9.33325C11.0833 10.6666 8.83333 10.7499 7.49999 9.33325C6.16666 7.91658 6.08333 5.66659 7.49999 4.33325C8.91666 2.99992 11.0833 2.99992 12.5 4.33325"
              stroke={color}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M3.33337 16.6667C3.33337 14.5834 5.00004 12.9167 7.08337 12.9167H9.25004"
              stroke={color}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M14.5833 17.0834V12.9167"
              stroke={color}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M12.5 14.9999H16.6667"
              stroke={color}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  trash: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6627 17.2544H6.98868C6.14475 17.2544 5.44349 16.6032 5.38062 15.7608L4.65759 5.96979H15.9697L15.2708 15.7568C15.2104 16.6007 14.5083 17.2544 13.6627 17.2544V17.2544Z"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M10.3273 9.19397V14.0303"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M3.87903 5.9698H16.7758"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M14.3576 5.96979L13.5411 3.79185C13.3049 3.16233 12.7036 2.74561 12.0313 2.74561H8.62337C7.95113 2.74561 7.34982 3.16233 7.11364 3.79185L6.29712 5.96979"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              d="M13.0921 9.19397L12.7455 14.0303"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_6"
              d="M7.56261 9.19397L7.90921 14.0303"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  tag: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M11.5251 12.7273C11.7008 12.903 11.7008 13.1877 11.5251 13.3634C11.3495 13.539 11.0647 13.539 10.8891 13.3634C10.7134 13.1877 10.7134 12.903 10.8891 12.7273C11.0647 12.5517 11.3495 12.5517 11.5251 12.7273"
              stroke={color}
              strokeWidth="1.83824"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6445 8.00261L23.4803 16.8384C24.4264 17.7845 24.4264 19.3188 23.4803 20.2649L18.4264 25.3188C17.4803 26.2649 15.946 26.2649 14.9999 25.3188L6.16411 16.483C5.93739 16.2563 5.80872 15.9475 5.80872 15.6264V8.85923C5.80872 8.19011 6.35161 7.64722 7.02073 7.64722H13.7891C14.1102 7.64722 14.4178 7.77467 14.6445 8.00261V8.00261Z"
              stroke={color}
              strokeWidth="1.83824"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M24.1911 12.5491L16.2181 4.67781C15.7585 4.22438 15.1409 3.9707 14.4963 3.9707H9.48523"
              stroke={color}
              strokeWidth="1.83824"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  sun: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Dark Mode switch/vuesax/linear/sun">
          <g id="vuesax/linear/sun">
            <g id="sun">
              <path
                id="Vector"
                d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
  share: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M13.53 7.52002L9.46997 10.56"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M16.4049 4.64228C17.1984 5.43582 17.1984 6.72242 16.4049 7.51596C15.6113 8.3095 14.3247 8.3095 13.5312 7.51596C12.7376 6.72241 12.7376 5.43582 13.5312 4.64228C14.3247 3.84873 15.6113 3.84873 16.4049 4.64228"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M13.53 16.4802L9.46997 13.4402"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M16.4049 16.4843C17.1984 17.2779 17.1984 18.5645 16.4049 19.358C15.6113 20.1515 14.3247 20.1515 13.5312 19.358C12.7376 18.5645 12.7376 17.2779 13.5312 16.4843C14.3247 15.6908 15.6113 15.6908 16.4049 16.4843"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              d="M9.46542 10.5648C10.2582 11.3576 10.2582 12.6429 9.46542 13.4356C8.67266 14.2284 7.38733 14.2284 6.59457 13.4356C5.80181 12.6429 5.80181 11.3575 6.59457 10.5648C7.38734 9.77202 8.67266 9.77202 9.46542 10.5648"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  setting: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M14.1213 10.3787C15.2929 11.5502 15.2929 13.4497 14.1213 14.6213C12.9497 15.7929 11.0502 15.7929 9.87868 14.6213C8.70711 13.4497 8.70711 11.5502 9.87868 10.3787C11.0502 9.20711 12.9497 9.20711 14.1213 10.3787"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.18 19.225V19.225C16.683 19.728 17.5 19.728 18.003 19.225L18.725 18.503C19.228 18 19.228 17.183 18.725 16.68V16.68C18.343 16.298 18.231 15.725 18.441 15.227C18.463 15.174 18.485 15.121 18.506 15.067C18.689 14.601 19.143 14.301 19.643 14.301H19.71C20.422 14.301 20.999 13.724 20.999 13.012V11.991C20.999 11.279 20.422 10.702 19.71 10.702H19.643C19.143 10.702 18.689 10.401 18.506 9.936C18.485 9.882 18.463 9.829 18.441 9.776C18.231 9.278 18.343 8.705 18.725 8.323V8.323C19.228 7.82 19.228 7.003 18.725 6.5L18.003 5.778C17.5 5.275 16.683 5.275 16.18 5.778V5.778C15.798 6.16 15.225 6.272 14.727 6.062C14.674 6.04 14.621 6.018 14.567 5.997C14.101 5.811 13.8 5.356 13.8 4.856V4.789C13.8 4.077 13.223 3.5 12.511 3.5H11.49C10.777 3.5 10.2 4.077 10.2 4.789V4.856C10.2 5.356 9.899 5.81 9.434 5.993C9.38 6.015 9.327 6.036 9.274 6.059C8.776 6.269 8.203 6.157 7.821 5.775V5.775C7.318 5.272 6.501 5.272 5.998 5.775L5.275 6.497C4.772 7 4.772 7.817 5.275 8.32V8.32C5.657 8.702 5.769 9.275 5.559 9.773C5.536 9.827 5.515 9.88 5.494 9.934C5.311 10.399 4.856 10.7 4.356 10.7H4.289C3.577 10.7 3 11.277 3 11.989V13.01C3 13.723 3.577 14.3 4.289 14.3H4.356C4.856 14.3 5.31 14.601 5.493 15.066C5.514 15.12 5.536 15.173 5.558 15.226C5.768 15.724 5.656 16.297 5.274 16.679V16.679C4.771 17.182 4.771 17.999 5.274 18.502L5.996 19.224C6.499 19.727 7.316 19.727 7.819 19.224V19.224C8.201 18.842 8.774 18.73 9.272 18.94C9.325 18.962 9.378 18.984 9.432 19.005C9.898 19.188 10.198 19.642 10.198 20.142V20.209C10.198 20.921 10.775 21.498 11.487 21.498H12.508C13.22 21.498 13.797 20.921 13.797 20.209V20.142C13.797 19.642 14.098 19.188 14.563 19.005C14.617 18.984 14.67 18.962 14.723 18.94C15.224 18.731 15.797 18.843 16.18 19.225V19.225Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  search: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <circle
            id="Oval"
            cx="12.0586"
            cy="12.0588"
            r="7.06194"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path"
            d="M21.0033 21.0034L17.0516 17.0518"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  plus_square: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M12 8V16"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M16 12H8"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  plus: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface, Essential/Plus, Add">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Path"
                d="M10.2093 5.90796V13.7045"
                stroke={color}
                strokeWidth="1.20907"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_2"
                d="M14.3773 9.80638H6.04395"
                stroke={color}
                strokeWidth="1.20907"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
  paragraph: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M3.66528 3.16502H14.3364"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M5.66577 5.83298H14.3361"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M5.66577 8.50046H14.3361"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M3.66528 11.1684H14.3364"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_5"
            d="M9.00073 13.8359H14.3363"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  paper: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M19 8H15C14.448 8 14 7.552 14 7V3"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  list: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M11 12H21"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M6.41399 10.586C7.19499 11.367 7.19499 12.633 6.41399 13.414C5.63299 14.195 4.36699 14.195 3.58599 13.414C2.80499 12.633 2.80499 11.367 3.58599 10.586C4.36699 9.80499 5.63299 9.80499 6.41399 10.586"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M11 5H21"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M3.02002 4.508L4.67302 5.996L8.00002 3"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              d="M11 19H21"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_6"
              d="M6.41399 17.586C7.19499 18.367 7.19499 19.633 6.41399 20.414C5.63299 21.195 4.36699 21.195 3.58599 20.414C2.80499 19.633 2.80499 18.367 3.58599 17.586C4.36699 16.805 5.63299 16.805 6.41399 17.586"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  link: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            stroke={color}
            id="Shape"
            d="M10.0244 11.9158C9.76438 11.6888 9.36956 11.7156 9.14254 11.9756C8.91553 12.2356 8.94229 12.6305 9.20232 12.8575L10.0244 11.9158ZM15.1626 12.3866L15.5737 12.8575C15.5843 12.8482 15.5946 12.8386 15.6046 12.8286L15.1626 12.3866ZM16.1027 10.5628C15.8612 10.8094 15.8654 11.2051 16.112 11.4466C16.3587 11.6881 16.7544 11.6839 16.9959 11.4372L16.1027 10.5628ZM10.5628 5.00416C10.3161 5.24563 10.3119 5.64134 10.5534 5.88799C10.7949 6.13464 11.1906 6.13883 11.4372 5.89735L10.5628 5.00416ZM11.9755 10.0842C12.2356 10.3112 12.6304 10.2844 12.8574 10.0244C13.0844 9.76435 13.0577 9.36953 12.7976 9.14252L11.9755 10.0842ZM6.83734 9.61334L6.42629 9.14252C6.41567 9.15179 6.40536 9.16143 6.39539 9.1714L6.83734 9.61334ZM5.89729 11.4373C6.13877 11.1906 6.13458 10.7949 5.88793 10.5534C5.64128 10.3119 5.24557 10.3161 5.00409 10.5628L5.89729 11.4373ZM5.45069 11L5.00872 10.5581L5.00409 10.5628L5.45069 11ZM11.4372 16.9959C11.6838 16.7544 11.688 16.3587 11.4465 16.112C11.2051 15.8654 10.8094 15.8612 10.5627 16.1027L11.4372 16.9959ZM9.20232 12.8575C11.0273 14.4507 13.7487 14.4507 15.5737 12.8575L14.7516 11.9158C13.3976 13.0979 11.3784 13.0979 10.0244 11.9158L9.20232 12.8575ZM15.6046 12.8286L16.9912 11.4419L16.1073 10.5581L14.7207 11.9447L15.6046 12.8286ZM16.9959 11.4372C18.7403 9.65541 18.7252 6.8013 16.962 5.03804L16.0781 5.92192C17.3568 7.20068 17.3678 9.27054 16.1027 10.5628L16.9959 11.4372ZM16.962 5.03804C15.1987 3.27478 12.3446 3.25967 10.5628 5.00416L11.4372 5.89735C12.7295 4.63221 14.7993 4.64317 16.0781 5.92192L16.962 5.03804ZM12.7976 9.14252C10.9727 7.54926 8.25126 7.54926 6.42629 9.14252L7.24838 10.0842C8.6024 8.90204 10.6215 8.90204 11.9755 10.0842L12.7976 9.14252ZM6.39539 9.1714L5.00874 10.5581L5.89264 11.442L7.27928 10.0553L6.39539 9.1714ZM5.00409 10.5628C3.25961 12.3446 3.27472 15.1987 5.03798 16.962L5.92186 16.0781C4.64311 14.7993 4.63215 12.7295 5.89729 11.4373L5.00409 10.5628ZM5.03798 16.962C6.80124 18.7252 9.65535 18.7404 11.4372 16.9959L10.5627 16.1027C9.27048 17.3678 7.20062 17.3569 5.92186 16.0781L5.03798 16.962Z"
            fill="#323232"
          />
        </g>
      </svg>
    );
  },
  grid: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M15 21.0001V9.06006"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M21 9.06006H11C9.89543 9.06006 9 9.95549 9 11.0601V21.0001"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M21 15.0601H9"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  filter: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M8.12132 5.37868C9.29289 6.55025 9.29289 8.44975 8.12132 9.62132C6.94975 10.7929 5.05025 10.7929 3.87868 9.62132C2.70711 8.44975 2.70711 6.55025 3.87868 5.37868C5.05025 4.20711 6.94975 4.20711 8.12132 5.37868"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M20 7.5H9"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M20.1213 15.3787C21.2929 16.5502 21.2929 18.4497 20.1213 19.6213C18.9497 20.7929 17.0502 20.7929 15.8787 19.6213C14.7071 18.4497 14.7071 16.5502 15.8787 15.3787C17.0502 14.2071 18.9497 14.2071 20.1213 15.3787"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M4 17.5H15"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  emoji: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M15.328 9.5C15.19 9.5 15.078 9.612 15.079 9.75C15.079 9.888 15.191 10 15.329 10C15.467 10 15.579 9.888 15.579 9.75C15.579 9.612 15.467 9.5 15.328 9.5"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M8.63902 9.5C8.50102 9.5 8.38902 9.612 8.39002 9.75C8.39002 9.888 8.50202 10 8.64002 10C8.77802 10 8.89002 9.888 8.89002 9.75C8.89002 9.612 8.77802 9.5 8.63902 9.5"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  email: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8V8C14.209 8 16 9.791 16 12V13.5C16 14.881 17.119 16 18.5 16C19.881 16 21 14.881 21 13.5V12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C13.149 21 14.317 20.782 15.444 20.315C16.052 20.063 16.614 19.747 17.133 19.386"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  edit: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M17.5817 9.19386V15.6422C17.5817 16.5329 16.8603 17.2543 15.9696 17.2543H4.68497C3.79429 17.2543 3.07288 16.5329 3.07288 15.6422V4.35758C3.07288 3.4669 3.79429 2.74548 4.68497 2.74548H10.3273"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.90918 12.4181L10.4482 12.1045C10.6264 12.0828 10.7924 12.0014 10.9198 11.8748L17.0707 5.72387C17.7518 5.04276 17.7518 3.93848 17.0707 3.25656V3.25656C16.3896 2.57545 15.2853 2.57545 14.6034 3.25656L8.50968 9.35027C8.38636 9.4736 8.30656 9.6332 8.28157 9.8065L7.90918 12.4181Z"
              stroke={color}
              strokeWidth="1.20907"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  dots: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M16.4191 10.9998C16.4191 11.2301 16.2325 11.4167 16.0023 11.4167C15.7721 11.4167 15.5854 11.2301 15.5854 10.9998C15.5854 10.7696 15.7721 10.583 16.0023 10.583C16.2325 10.583 16.4191 10.7696 16.4191 10.9998"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M11.4171 10.9998C11.4171 11.2301 11.2305 11.4167 11.0002 11.4167C10.77 11.4167 10.5834 11.2301 10.5834 10.9998C10.5834 10.7696 10.77 10.583 11.0002 10.583C11.2305 10.583 11.4171 10.7696 11.4171 10.9998"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M6.41486 10.9998C6.41486 11.2301 6.22823 11.4167 5.99802 11.4167C5.7678 11.4167 5.58118 11.2301 5.58118 10.9998C5.58118 10.7696 5.7678 10.583 5.99802 10.583C6.22823 10.583 6.41486 10.7696 6.41486 10.9998"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  door: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 3H18C19.105 3 20 3.895 20 5V19C20 20.105 19.105 21 18 21H6C4.895 21 4 20.105 4 19V5C4 3.895 4.895 3 6 3Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M9 11V13"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5.00302V18.998C4 20.485 5.565 21.452 6.894 20.787L10.894 18.787C11.572 18.447 12 17.755 12 16.997V7.00302C12 6.24502 11.572 5.55302 10.894 5.21402L6.894 3.21402C5.565 2.54902 4 3.51602 4 5.00302Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  disable: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface, Essential/Left, Arrow">
          <circle id="Ellipse 1" cx="7.5" cy="8" r="7" stroke={color} />
          <line
            id="Line 27"
            x1="12.3536"
            y1="2.85355"
            x2="2.35355"
            y2="12.8536"
            stroke={color}
          />
        </g>
      </svg>
    );
  },
  comment: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 4.99683C8.02789 4.99683 3.99622 8.35691 3.99622 12.497C4.07137 14.9954 5.44922 17.2719 7.62773 18.4972C7.41133 19.0853 7.11043 19.6387 6.7345 20.14C6.527 20.4429 6.53214 20.8436 6.74732 21.1411C6.96251 21.4386 7.34137 21.569 7.69406 21.4668C8.89689 21.1166 10.029 20.5583 11.0391 19.8173C11.6857 19.9385 12.3422 19.9987 13 19.9973C17.972 19.9973 22.0037 16.6372 22.0037 12.497C22.0037 8.35692 17.972 4.99683 13 4.99683Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M9.99878 10.9992H16.0013"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M9.99878 14.0005H13"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  color: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M9.99924 5.31262C9.87257 5.31262 9.77007 5.41512 9.77174 5.54179C9.77174 5.66845 9.87424 5.77095 10.0009 5.77095C10.1276 5.77095 10.2301 5.66845 10.2301 5.54179C10.2284 5.41512 10.1267 5.31262 9.99924 5.31262"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M5.7701 9.99924C5.7701 9.87257 5.6676 9.77007 5.54176 9.77174C5.4151 9.77174 5.3126 9.87424 5.3126 10.0009C5.3126 10.1276 5.4151 10.2301 5.54176 10.2301C5.66843 10.2301 5.7701 10.1267 5.7701 9.99924"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M13.3142 6.68507C13.225 6.59591 13.08 6.59591 12.9917 6.6859C12.9025 6.77507 12.9025 6.92007 12.9917 7.00924C13.0809 7.0984 13.2259 7.0984 13.315 7.00924C13.4042 6.91924 13.4042 6.77507 13.3142 6.68507"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              d="M7.00842 12.9909C6.91926 12.9017 6.77426 12.9017 6.68592 12.9917C6.59676 13.0809 6.59676 13.2259 6.68592 13.315C6.77509 13.4042 6.92009 13.4042 7.00926 13.315C7.09842 13.2259 7.09842 13.0809 7.00842 12.9909"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              d="M7.00926 7.00833C7.09842 6.91917 7.09842 6.77417 7.00842 6.68584C6.91926 6.59667 6.77426 6.59667 6.68509 6.68584C6.59593 6.775 6.59593 6.92 6.68509 7.00917C6.77426 7.09833 6.91926 7.09833 7.00926 7.00833"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0001 17.5C5.7876 17.5 2.38596 14.0267 2.50345 9.78756C2.61179 5.87425 5.87426 2.61178 9.78757 2.50344C14.0267 2.38594 17.5 5.78759 17.5 10.0001V10.8334C17.5 11.7542 16.7542 12.5 15.8334 12.5H14.1142C13.0067 12.5 12.2076 13.56 12.5117 14.6242L12.7259 15.375C13.0309 16.44 12.2309 17.5 11.1242 17.5H10.0001Z"
              stroke={color}
              strokeWidth="1.24999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  archive: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M10.3273 9.19355V3.00171"
            stroke={color}
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3274 9.19356L12.7465 6.77441L10.3274 9.19356Z"
            stroke={color}
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M3.06982 12.4191H6.60339C6.90856 12.4191 7.18758 12.5914 7.3243 12.8642L7.68475 13.5859C7.82137 13.8593 8.10083 14.032 8.40647 14.0318H12.2473C12.5529 14.032 12.8324 13.8593 12.969 13.5859L13.3294 12.865C13.4661 12.5916 13.7455 12.4189 14.0511 12.4191H17.5847"
            stroke={color}
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M12.7464 2.74243H15.1656C16.5016 2.74243 17.5847 3.82552 17.5847 5.16158V14.8382C17.5847 16.1742 16.5016 17.2573 15.1656 17.2573H5.48897C4.15291 17.2573 3.06982 16.1742 3.06982 14.8382V5.16158C3.06982 3.82552 4.15291 2.74243 5.48897 2.74243H7.90812"
            stroke={color}
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.9082 6.77441L10.3274 9.19356L7.9082 6.77441Z"
            stroke={color}
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  close: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M8 8L16 16"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M16 8L8 16"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  chevron_right: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M10 16.5L14 12.5L10 8.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  chevron_left: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M14 8.5L10 12.5L14 16.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  chevron_down_circle: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrows, Diagrams/Arrow">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Path"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10Z"
                stroke={color}
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_2"
                d="M12.5 9.16699L10 11.667L7.5 9.16699"
                stroke={color}
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
  chevron_down: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Path"
            d="M6 7.5L9 10.5L12 7.5"
            stroke={color}
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
  calender_full: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M16 2V6"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M8 2V6"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_3"
              d="M3 9H21"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_5"
              d="M7.01304 12.729C6.87504 12.729 6.76304 12.841 6.76404 12.979C6.76404 13.117 6.87604 13.229 7.01404 13.229C7.15204 13.229 7.26404 13.117 7.26404 12.979C7.26404 12.841 7.15204 12.729 7.01304 12.729"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_6"
              d="M12.013 12.729C11.875 12.729 11.763 12.841 11.764 12.979C11.764 13.117 11.876 13.229 12.014 13.229C12.152 13.229 12.264 13.117 12.264 12.979C12.264 12.841 12.152 12.729 12.013 12.729"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_7"
              d="M17.013 12.729C16.875 12.729 16.763 12.841 16.764 12.979C16.764 13.117 16.876 13.229 17.014 13.229C17.152 13.229 17.264 13.117 17.264 12.979C17.264 12.841 17.152 12.729 17.013 12.729"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_8"
              d="M7.01304 16.729C6.87504 16.729 6.76304 16.841 6.76404 16.979C6.76404 17.117 6.87604 17.229 7.01404 17.229C7.15204 17.229 7.26404 17.117 7.26404 16.979C7.26404 16.841 7.15204 16.729 7.01304 16.729"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_9"
              d="M12.013 16.729C11.875 16.729 11.763 16.841 11.764 16.979C11.764 17.117 11.876 17.229 12.014 17.229C12.152 17.229 12.264 17.117 12.264 16.979C12.264 16.841 12.152 16.729 12.013 16.729"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  calende_empty: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface, Essential/Calendar,Schedule">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Path"
                d="M21.3307 3.16699V8.50032"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_2"
                d="M10.6653 3.16699V8.50032"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_3"
                d="M3.99884 12.5007H27.9988"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.3322 5.83398H6.66551C5.19217 5.83398 3.99884 7.02732 3.99884 8.50065V25.834C3.99884 27.3073 5.19217 28.5007 6.66551 28.5007H25.3322C26.8055 28.5007 27.9988 27.3073 27.9988 25.834V8.50065C27.9988 7.02732 26.8055 5.83398 25.3322 5.83398Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Path_5"
                d="M8.66515 23.3333C8.48115 23.3333 8.33182 23.4827 8.33315 23.6667C8.33315 23.8507 8.48249 24 8.66649 24C8.85049 24 8.99982 23.8507 8.99982 23.6667C8.99982 23.4827 8.85049 23.3333 8.66515 23.3333"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
  back: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Path"
              d="M4.01001 11.98H19"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              d="M10.013 5.988L4.00195 12L10.013 18.012"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
  check_circle: (color, size) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.85667 9.35167L10.0042 12.5L16.4 6.10417C15.0833 3.94583 12.7133 2.5 10 2.5C5.8575 2.5 2.5 5.8575 2.5 10C2.5 14.1425 5.8575 17.5 10 17.5C13.86 17.5 17.0358 14.5833 17.4508 10.8333"
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  profile_edit: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5.7C16.7 7.4 16.7 10.1 15 11.7C13.3 13.3 10.6 13.4 8.99999 11.7C7.39999 10 7.29999 7.3 8.99999 5.7C10.7 4.1 13.3 4.1 15 5.7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 20.5C4 18 6 16 8.5 16H11.1"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 21.5H16.3L19.7 18.1C20.1 17.7 20.1 17.1 19.7 16.7L18.8 15.8C18.4 15.4 17.8 15.4 17.4 15.8L14 19.2V21.5V21.5H14Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  check_round_square: (color, size) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 18 17"
        fill="none"
      >
        <path
          d="M11.137 7.24133L8.46759 9.90911L6.86279 8.30911"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2.99756"
          y="2.4975"
          width="12.005"
          height="12.005"
          rx="3.33333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  profile_check: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="13.0001"
          cy="8.74835"
          r="4.25177"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.99683 20.5033C4.99683 18.0173 7.01267 16.0015 9.4987 16.0015H12.0828"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0031 17.4399L17.0019 20.4412L15.2021 18.6404"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  arrow_right: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.47998 12.48H19.47"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4829 6.48779L19.5199 12.4998L13.4829 18.5118"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  attach: (color, size) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9991 14.0006L11.9525 14.954C12.703 15.7045 13.7209 16.1262 14.7822 16.1262C15.8436 16.1262 16.8614 15.7045 17.6119 14.954L20.6442 11.9218C22.4571 10.1086 22.4571 7.16918 20.6442 5.35604V5.35604C18.831 3.5431 15.8916 3.5431 14.0784 5.35604L13.1911 6.24441"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0008 10.9993L14.0474 10.0459C13.297 9.29541 12.2791 8.87378 11.2177 8.87378C10.1564 8.87378 9.13852 9.29541 8.38806 10.0459L5.35579 13.0782C3.54286 14.8913 3.54286 17.8308 5.35579 19.6439V19.6439C7.16893 21.4568 10.1084 21.4568 11.9215 19.6439L12.8089 18.7555"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};

export default icons;
