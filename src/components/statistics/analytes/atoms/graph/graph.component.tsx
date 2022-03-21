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

import styles from './graph.module.scss';

const X_TICKS_INTERVAL = 50;
const COW = 67388;

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
            <Label value="Milking days" position="bottom" offset={0} />
          </XAxis>
          <YAxis tickLine={false} axisLine={false}>
            <Label value="Analyte concentrations, %" angle={-90} />
          </YAxis>

          <Tooltip />

          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingLeft: 25 }}
          />

          <Line
            name={`Cow ${COW} Fat`}
            type="monotone"
            dataKey="fat_real_conc"
            stroke="var(--color-warning)"
            legendType="plainline"
            dot={false}
          />
          <Line
            name="Avg. Fat Conc."
            type="monotone"
            dataKey="fat_fit_conc"
            stroke="var(--color-warning)"
            strokeDasharray="12 8"
            legendType="plainline"
            dot={false}
          />
          <Line
            name={`Cow ${COW} Protein`}
            type="monotone"
            dataKey="protein_real_conc"
            stroke="var(--color-primary)"
            legendType="plainline"
            dot={false}
          />
          <Line
            name="Avg. Protein Conc."
            type="monotone"
            dataKey="protein_fit_conc"
            stroke="var(--color-primary)"
            strokeDasharray="12 8"
            legendType="plainline"
            dot={false}
          />

          <Scatter
            dataKey={getMilkingDataKeyValue('Fat_lab')}
            name="Fat"
            fill="var(--color-warning)"
          />
          <Scatter
            dataKey={getMilkingDataKeyValue('Protein_lab')}
            name="Protein"
            fill="var(--color-primary)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
