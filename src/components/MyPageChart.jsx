import { ResponsiveLine } from "@nivo/line";
// import { linearGradientDef } from "@nivo/core";
import { mockMyLineData as data } from "../data/mockData";

// const Image = ({ lines }) => {
//   let size = 24;
//   let images = lines.map(({ key, x, y, width, height }) => {
//     return (
//       <image
//         key={key}
//         xlinkHref="../../assets/icon_goal_blue.svg"
//         x={x + width / 2 - size / 2}
//         y={y + height / 2 - size / 2}
//         height={size}
//         width={size}
//       />
//     );
//   });
//   return <g>{images}</g>;
// };
// import { tokens } from "theme";
const LineChart = () => {
  //   const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      colors={"#ff754b"}
      margin={{ top: 30, right: 0, bottom: 50, left: 0 }}
      // yScale={{
      //   type: "linear",
      //   min: "auto",
      //   max: "auto",
      //   stacked: true,
      //   reverse: false,
      // }}
      // strokeColor={"red"}
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      enableGridX={false}
      enableGridY={false}
      axisBottom={null}
      axisLeft={null}
      pointSize={2}
      pointSymbol={(e) => {
        let size = 24;
        let images = ({ key, x, y, width, height }) => {
          return (
            <image
              key={key}
              xlinkHref="../../assets/icon_goal_blue.svg"
              x={x + width / 2 - size / 2}
              y={y + height / 2 - size / 2}
              height={size}
              width={size}
            />
          );
        };
        return <g>{images}</g>;
      }}
      // pointColor={{ from: "color", modifiers: [] }}
      // pointBorderWidth={2}
      // pointBorderColor={{ from: "serieColor" }}
      // pointLabel="y"
      // pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.9}
      offsetType="diverging"
      // keys={["commits"]}
      transportation
      defs={[
        {
          id: "gradientC",

          type: "linearGradient",

          colors: [
            { offset: 0, color: "#fff" },

            { offset: 100, color: "#ff754b", opacity: 0.21 },
          ],
          gradientTransform: "rotate(180 0.3 0.5)",
        },
      ]}
      fill={[{ match: "*", id: "gradientC" }]}
      animate={true}
      colorBy={"id"}
      lineWidth={3}
      dotSize={14}
      enableDots={false}
      dotColor="inherit:darker(0.3)"
      dotBorderWidth={2}
      dotBorderColor="#fd3f01"
      // enableDotLabel={true}
      dotLabel="y"
      dotLabelYOffset={-12}
      motionStiffness={90}
      motionDamping={15}
      // layers={[
      //   "grid",
      //   "axes",
      //   "bars",
      //   Image,
      //   "markers",
      //   "legends",
      //   "annotations",
      // ]}
      // legends={[
      //     {
      //         anchor: 'bottom-right',
      //         direction: 'column',
      //         justify: false,
      //         translateX: 100,
      //         translateY: 0,
      //         itemsSpacing: 0,
      //         itemDirection: 'left-to-right',
      //         itemWidth: 80,
      //         itemHeight: 20,
      //         itemOpacity: 0.75,
      //         symbolSize: 12,
      //         symbolShape: 'circle',
      //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
      //         effects: [
      //             {
      //                 on: 'hover',
      //                 style: {
      //                     itemBackground: 'rgba(0, 0, 0, .03)',
      //                     itemOpacity: 1
      //                 }
      //             }
      //         ]
      //     }
      // ]}
    />
  );
};
export default LineChart;
