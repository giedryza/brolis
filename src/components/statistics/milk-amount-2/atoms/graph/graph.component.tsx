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
  ReferenceLine,
} from 'recharts';

import { useCow, useFarmMilking } from 'domain/statistics/statistics.queries';
import { Day, FarmMilking } from 'domain/statistics/statistics.types';

import { COW, X_TICKS_INTERVAL } from './graph.constants';
import styles from './graph.module.scss';

export const Graph: VFC = () => {
  const { data: days = [], isLoading } = useCow(COW);
  const { data: milkings = [] } = useFarmMilking();

  const getMilkingDataKeyValue = (key: keyof FarmMilking) => (data: Day) => {
    const milking = milkings.find(
      ({ Milking_days }) => Milking_days === data.days
    );

    return milking?.[key];
  };

  return (
    <div className={styles.container}>
      {isLoading ? null : (
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
              <Label
                value="Milk amount"
                angle={-90}
                position="left"
                offset={0}
              />
            </YAxis>

            <Tooltip />

            <Legend
              layout="vertical"
              align="right"
              verticalAlign="top"
              wrapperStyle={{ paddingLeft: 25, fontWeight: 600 }}
            />

            <ReferenceLine
              x={52}
              stroke="var(--color-text)"
              strokeDasharray="8 8"
            >
              <Label value="Last insemination" position="insideBottom" />
            </ReferenceLine>
            <ReferenceLine
              x={300}
              stroke="var(--color-text)"
              strokeDasharray="8 8"
            >
              <Label value="Expected calving time" position="insideBottom" />
            </ReferenceLine>

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

            <Line
              dataKey={getMilkingDataKeyValue('Milk_amount')}
              name="Milk"
              fill="var(--color-primary)"
              strokeDasharray="3 3"
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
