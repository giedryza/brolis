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
  Scatter,
  ComposedChart,
} from 'recharts';

import { useCow, useMilking } from 'domain/statistics/statistics.queries';
import { Day, Milking } from 'domain/statistics/statistics.types';

import { COW, X_TICKS_INTERVAL } from './graph.constants';
import styles from './graph.module.scss';

export const Graph: VFC = () => {
  const { data: days = [] } = useCow(COW);
  const { data: milkings = [] } = useMilking();

  const getMilkingDataKeyValue = (key: keyof Milking) => (data: Day) => {
    const milking = milkings.find(
      ({ Milking_days }) => Milking_days === data.days
    );

    return milking?.[key];
  };

  if (!days.length || !milkings.length) return null;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={days}
          margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        >
          <CartesianGrid stroke="var(--color-white)" />

          <XAxis
            axisLine={false}
            dataKey="days"
            interval="preserveStart"
            ticks={Array.from({
              length: Math.floor(days.length / X_TICKS_INTERVAL),
            }).map((_, i) => (i + 1) * X_TICKS_INTERVAL)}
            tickLine={false}
          >
            <Label value="Milking days" position="bottom" />
          </XAxis>
          <YAxis tickLine={false} axisLine={false}>
            <Label value="Milk amount" angle={-90} position="left" offset={0} />
          </YAxis>

          <Tooltip />

          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingLeft: 25 }}
          />

          <Line
            name={`Cow ${COW}`}
            type="monotone"
            dataKey="milk_real_conc"
            stroke="var(--color-primary)"
            legendType="plainline"
            dot={false}
          />
          <Line
            name="Average Milk"
            type="monotone"
            dataKey="milk_fit_conc"
            stroke="var(--color-error)"
            strokeDasharray="12 8"
            legendType="plainline"
            dot={false}
          />

          <Scatter
            dataKey={getMilkingDataKeyValue('Milk_amount_y')}
            name="Fat"
            fill="var(--color-success)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
