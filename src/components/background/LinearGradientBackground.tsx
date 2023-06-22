// Linear-Gradient
import { ReactElement } from "react";
import LinearGradient from "react-native-linear-gradient"

interface ILinearGradientBackgroundProps {
  colors: string[];
  children: ReactElement
}

function LinearGradientBackground(props:ILinearGradientBackgroundProps): JSX.Element {

  // destruct props
  const {colors, children} = props;

  return (
    <LinearGradient colors={colors} locations={[0, 0.67, 1]} >
      {
        children
      }
    </LinearGradient>
  )
}

export default LinearGradientBackground;