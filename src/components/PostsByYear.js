import React, { useMemo } from "react";
import Posts from "./Posts";

export default function PostsByYear({ data, showYears }) {
  const obj = useMemo(() => {
    const o = {};
    data.forEach((x) => {
      const n = x.date.split(", ")[1];
      o[n] = [...(o[n] || []), x];
    });
    return o;
  }, [data]);

  const years = useMemo(() => Object.keys(obj).reverse(), [obj]);

  return years.map((year) => (
    <section key={year}>
      <h2>{year}</h2>
      <Posts data={obj[year]} />
    </section>
  ));
}
