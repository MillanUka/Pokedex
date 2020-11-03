import React from "react";
export default function Stats(props) {
  const { stats } = props;
  console.log(stats)
  return (
    <div>
      {stats.map(({ stat }, index) => {
        var statName = stat.name[0].toUpperCase() + stat.name.substring(1);
        console.log(stat)
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
