import Svg, { Path, G, SvgProps } from "react-native-svg";

const Svglightning: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <G>
        <Path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></Path>
      </G>
    </Svg>
  );
};

export default Svglightning;
