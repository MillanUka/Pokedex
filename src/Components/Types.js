import React from "react";
export default function Types(props) {
  const { types } = props;
  return (
    <div>
      {types.map(({ type }, index) => {
        var typeName = type.name[0].toUpperCase() + type.name.substring(1);
        return (
          <React.Fragment className={"type"} key={index}>
            <div className={typeName} style={{ fontSize: "22px" }}>
              {typeName}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
