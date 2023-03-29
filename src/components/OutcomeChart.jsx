import { ResponsiveLine } from "@nivo/line";
import { mockOutcomeData as data } from "../data/mockOutData";



// const Line = ({ line, xScale, yScale }) => {
//   const lineGenerator = line()
//     .x((line) => xScale(line.data.index) + line.width / 2)
//     .y((line) => yScale(line.data.data.v + 0.2))
//     .curve(curveCatmullRom.alpha(0.5));

//   return (
//     <path
//       d={lineGenerator(line)}
//       fill="none"
//       stroke={"green"}
//       style={{ pointerEvents: "none", strokeWidth: "2" }}
//     />
//   );
// };
const OutcomeChart = () => {
  //   const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      colors={["#2e9875", "#ffcebf"]}
      //   theme={{
      //     axis: {
      //       domain: {
      //         line: {
      //           stroke: colors.grey[100],
      //         },
      //       },
      //       legend: {
      //         text: {
      //           fill: colors.grey[100],
      //         },
      //       },
      //       ticks: {
      //         line: {
      //           stroke: colors.grey[100],
      //           strokeWidth: 1,
      //         },
      //         text: {
      //           fill: colors.grey[100],
      //         },
      //       },
      //     },
      //     legends: {
      //       text: {
      //         fill: colors.grey[100],
      //       },
      //     },
      //     tooltip: {
      //       container: {
      //         color: colors.primary[500],
      //       },
      //     },
      //   }}
      margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "transportatiasdasd",
        legendOffset: 36,
        // legendPosition: "middle",
      }}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      //   colors={{ scheme: "reds" }}
      // layers={[ Line,]}
      lineWidth={1}
      enablePoints={false}
      pointSize={5}
      //   pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      //   pointBorderColor={{ from: "serieColor" }}
      crosshairType="cross"
      pointLabel="y"
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={1}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: -2,
          translateY: 2,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 145,
          itemHeight: 0,
          reverse: true,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default OutcomeChart;
