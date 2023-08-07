import { View, Text } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type props = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = "#EE0F55";

const RingProgess = ({ radius = 100, strokeWidth = 15, progress }: props) => {
  const radiusCalculation = radius * 2;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const filledAmount = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * filledAmount.value, circumference],
  }));

  useEffect(() => {
    filledAmount.value = withTiming(progress, { duration: 2000 });
  }, [progress]);

  return (
    <View
      style={{
        alignSelf: "center",
        width: radiusCalculation,
        height: radiusCalculation,
      }}
    >
      <Svg height={radiusCalculation} width={radiusCalculation}>
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        <AnimatedCircle
          originX={radius}
          originY={radius}
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          rotation="-90"
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  );
};

export default RingProgess;
