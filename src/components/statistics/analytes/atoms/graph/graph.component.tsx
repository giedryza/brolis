import { useMemo, VFC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

import { useCow } from 'domain/statistics/statistics.queries';

import styles from './graph.module.scss';

const X_TICKS_INTERVAL = 50;
const COW = 67388;

export const Graph: VFC = () => {
  const { data: days = [] } = useCow(COW);

  const data = useMemo(() => {
    return days.map((day) => ({
      day: day.days,
      fat: day.fat_real_conc,
      avgFat: day.fat_fit_conc,
      protein: day.protein_real_conc,
      avgProtein: day.protein_fit_conc,
    }));
  }, [days]);

  if (!data.length) return null;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="day"
            interval="preserveStart"
            ticks={Array.from({
              length: Math.floor(data.length / X_TICKS_INTERVAL),
            }).map((_, i) => (i + 1) * X_TICKS_INTERVAL)}
            tickLine={false}
          >
            <Label value="Milking days" position="bottom" offset={0} />
          </XAxis>
          <YAxis tickLine={false}>
            <Label value="Analyte concentrations, %" angle={-90} />
          </YAxis>
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            iconType="plainline"
            wrapperStyle={{ paddingLeft: 25 }}
          />
          <Line
            name={`Cow ${COW} Fat`}
            type="monotone"
            dataKey="fat"
            stroke="var(--color-warning)"
            dot={false}
          />
          <Line
            name="Avg. Fat Conc."
            type="monotone"
            dataKey="avgFat"
            stroke="var(--color-warning)"
            strokeDasharray="12 8"
            dot={false}
          />
          <Line
            name={`Cow ${COW} Protein`}
            type="monotone"
            dataKey="protein"
            stroke="var(--color-primary)"
            dot={false}
          />
          <Line
            name="Avg. Protein Conc."
            type="monotone"
            dataKey="avgProtein"
            stroke="var(--color-primary)"
            strokeDasharray="12 8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
