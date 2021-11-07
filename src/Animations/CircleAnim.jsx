function CircleAnim(props) {
    return (
        <div style={props?.style} className={props?.className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="955 0 44 44">
                <svg x="955" stroke={props.color}>
                    <g fill={props.color} fillRule="evenodd" strokeWidth="0">
                        <circle cx="22" cy="22" r="1">
                            <animate
                                attributeName="r"
                                begin="0s"
                                calcMode="spline"
                                dur="7s"
                                keySplines="0.165, 0.84, 0.44, 1"
                                keyTimes="0; 1"
                                repeatCount="indefinite"
                                values="12; 20"
                            />
                            <animate
                                attributeName="fill-opacity"
                                begin="0s"
                                calcMode="spline"
                                dur="7s"
                                keySplines="0.3, 0.61, 0.355, 1"
                                keyTimes="0; 1"
                                repeatCount="indefinite"
                                values="0.5; 0.01"
                            />
                        </circle>
                        <circle cx="22" cy="22" r="1">
                            <animate
                                attributeName="r"
                                begin="3.5s"
                                calcMode="spline"
                                dur="7s"
                                keySplines="0.165, 0.84, 0.44, 1"
                                keyTimes="0; 1"
                                repeatCount="indefinite"
                                values="12; 20"
                            />
                            <animate
                                attributeName="fill-opacity"
                                begin="3.5s"
                                calcMode="spline"
                                dur="7s"
                                keySplines="0.3, 0.61, 0.355, 1"
                                keyTimes="0; 1"
                                repeatCount="indefinite"
                                values="0.5; 0.01"
                            />
                        </circle>
                    </g>
                </svg>
            </svg>
        </div>
    );
}

export default CircleAnim;