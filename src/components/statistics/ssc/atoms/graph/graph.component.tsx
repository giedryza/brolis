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
  ReferenceLine,
} from 'recharts';

import { useSsc } from 'domain/statistics/statistics.queries';

import styles from './graph.module.scss';

export const Graph: VFC = () => {
  const { data: ssc = [], isLoading } = useSsc();

  return (
    <div className={styles.container}>
      {isLoading ? null : (
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
            <YAxis tickLine={false} axisLine={false} dataKey="SSC_lab" />

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

            <ReferenceLine
              x={3}
              stroke="var(--color-text)"
              strokeDasharray="8 8"
            >
              <Label value="Last insemination" position="insideBottom" />
            </ReferenceLine>
            <ReferenceLine
              x={22}
              stroke="var(--color-text)"
              strokeDasharray="8 8"
            >
              <Label value="Expected calving time" position="insideBottom" />
            </ReferenceLine>

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
      )}
    </div>
  );
};
