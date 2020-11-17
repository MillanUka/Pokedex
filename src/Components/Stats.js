import React from "react";
import { removePunctuation } from "../Utils";
export default function Stats(props) {
  const { stats } = props;
  return (
    <div>
      {stats.map(({ stat }, index) => {
        var statName = removePunctuation(stat.name[0].toUpperCase() + stat.name.substring(1), " ");
        return (
          <React.Fragment key={index}>
            <div style={{ fontSize: "22px" }}>
              {statName}: {stats[index].base_stat}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );

}
