import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
// import { tokens } from "theme";
const LineChart = () => {
  //   const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      colors={["#ff754b", "#ffcebf"]}
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
      margin={{ top: 20, right: 0, bottom: 50, left: 0 }}
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
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      //   colors={{ scheme: "reds" }}
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
          translateX: 25,
          translateY: 10,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: localStorage.getItem("language") === "jp" ? 100 : 125,
          itemHeight: 20,
          reverse: true,
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgb(0, 0, 0)",
          effects: [
            {
              on: "hover",
              style: {
                // itemBackground: "rgb(0, 0, 0)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
