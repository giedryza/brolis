import { VFC } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  ComposedChart,
  ReferenceArea,
} from 'recharts';

import { useSsc } from 'domain/statistics/statistics.queries';

import styles from './graph.module.scss';

export const Graph: VFC = () => {
  const { data: ssc = [], isLoading } = useSsc();

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={ssc}
          margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        >
          <CartesianGrid stroke="var(--color-white)" />

          <XAxis
            axisLine={false}
            dataKey="Milking_days"
            interval="preserveStart"
            tickLine={false}
          >
            <Label value="Milking days" position="bottom" offset={0} />
          </XAxis>
          <YAxis tickLine={false} axisLine={false} dataKey="SSC_lab">
            <Label angle={-90} position="left" offset={0} textAnchor="center" />
          </YAxis>

          <Tooltip />

          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingLeft: 25 }}
          />

          <ReferenceArea y1={0} y2={150} fill="var(--color-success)" />
          <ReferenceArea y1={150} y2={300} fill="var(--color-warning)" />
          <ReferenceArea y1={300} fill="var(--color-error)" />

          <Line
            name="SSC lab"
            type="linear"
            dataKey="SSC_lab"
            stroke="var(--color-primary)"
            strokeDasharray="3 3"
            legendType="plainline"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
