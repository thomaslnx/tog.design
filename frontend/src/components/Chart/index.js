import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  {
    date: '17/06',
    range: 600,
    vendas: 350,
  },
  {
    date: '18/06',
    range: 500,
    vendas: 240,
  },
  {
    date: '19/06',
    range: 400,
    vendas: 40,
  },
  {
    date: '20/06',
    range: 300,
    vendas: 550,
  },
  {
    date: '21/06',
    range: 200,
    vendas: 100,
  },
  {
    date: '22/06',
    range: 100,
    vendas: 150,
  },
];

const CustomizedXAxisLabels = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`} style={{ font: 8 }}>
      <text
        className="date"
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
        textLength="2.5%"
      >
        {payload.value}
      </text>
    </g>
  );
};

const Chart = () => {
  return (
    <LineChart
      layout="horizontal"
      width={920}
      height={345}
      data={data}
      margin={{
        top: 30,
        right: 30,
        bottom: 40,
      }}
    >
      <CartesianGrid stroke="#3d3d3d" strokeWidth={0.4} />
      <XAxis dataKey="date" tick={<CustomizedXAxisLabels />} />
      <YAxis tickMargin={30} />
      <Tooltip />
      <Line
        dataKey="vendas"
        stroke="#5da249"
        strokeWidth={2}
        activeDot={{ r: 10 }}
        dot={{ strokeWidth: 6 }}
      />
    </LineChart>
  );
};

export default Chart;
