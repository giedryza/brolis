import { useMemo, VFC } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from 'recharts';

import { useResiduals } from 'domain/statistics/statistics.queries';

import styles from './graph.module.scss';

export const Graph: VFC = () => {
  const { data: residuals = [], isLoading } = useResiduals();

  const milk = useMemo(
    () => ({
      positive: residuals.filter((residual) => !!residual.milk_residuals_pos),
      negative: residuals.filter((residual) => !!residual.milk_residuals_neg),
    }),
    [residuals]
  );

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={residuals}
          margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        >
          <CartesianGrid stroke="var(--color-white)" />

          <XAxis
            axisLine={false}
            dataKey="Cow"
            tickLine={false}
            angle={90}
            strokeLinejoin="bevel"
            interval="preserveStart"
            tickMargin={25}
            allowDuplicatedCategory={false}
          />
          <YAxis tickLine={false} axisLine={false} />

          <Tooltip />

          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingLeft: 25, fontWeight: 600 }}
          />

          <Bar
            dataKey="price_residuals_pos"
            barSize={5}
            name="Positive"
            fill="var(--color-success)"
          />
          <Bar
            dataKey="price_residuals_neg"
            barSize={5}
            name="Negative"
            fill="var(--color-error)"
          />

          <Line
            data={milk.positive}
            name="Milk residuals"
            type="linear"
            dataKey="milk_residuals"
            stroke="var(--color-success)"
            legendType="plainline"
            dot={false}
            strokeWidth={2}
          />
          <Line
            data={milk.negative}
            name="Milk residuals"
            type="linear"
            dataKey="milk_residuals"
            stroke="var(--color-error)"
            legendType="plainline"
            dot={false}
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
