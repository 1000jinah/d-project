import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../data/mockOutData";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = () => {
  //   const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data}
      //   colors={["#2e9875", "#ffcebf"]}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      valueFormat=" >-"
      innerRadius={0.6}
      activeOuterRadiusOffset={8}
      colors={["#ff754b", "#4bceff", "#f9e002", "#b8dec3"]}
      borderWidth={1}
      borderColor={"#000"}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabel="value"
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      // legends={[
      //   {
      //     anchor: "bottom",
      //     direction: "row",
      //     justify: false,
      //     translateX: 0,
      //     translateY: 56,
      //     itemsSpacing: 0,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: "#999",
      //     itemDirection: "left-to-right",
      //     itemOpacity: 1,
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default PieChart;
