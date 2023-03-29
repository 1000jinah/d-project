// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockOutData";

const ValueOutside = ({ bars }) => {
  return bars.map((bar) => {
    const {
      key,
      width,
      height,
      x,
      y,
      data: { value },
    } = bar;
    return (
      <g key={key} transform={`translate(${x}, ${y})`}>
        <text
          transform={`translate(${width - (width - 12)}, ${
            height - (height - 28)
          })`}
          textAnchor="middle"
          fontSize="11px"
          fontWeight={"bold"}
        >
          {/* YOUR LABEL HERE */}
          {value}%
        </text>
      </g>
    );
  });
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = () => {
  //   const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "VIG",
        "VEA",
        "VWO",
        "IJH",
        //   'RWR'
      ]}
      //   indexBy="country"
      margin={{ top: 10, right: 8, bottom: 20, left: 8 }}
      padding={0.3}
      innerPadding={5}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#ff754b", "#b8dec3", "#f9e002", "#4bceff", "#808080"]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderWidth={1}
      borderColor={"#000"}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 0,
        tickRotation: null,
        // legend: "country",
        // legendPosition: "middle",
        // legendOffset: 35,
      }}
      axisLeft={null}
      enableGridY={false}
      enableLabel={false}
      role="application"
      ariaLabel="Nivo bar chart demo"
      layers={[
        "grid",
        // "axes",
        "bars",
        // "markers",
        // "legends",
        "annotations",
        (props) => <ValueOutside {...props}/>
      ]}
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
