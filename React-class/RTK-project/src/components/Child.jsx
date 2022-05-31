import React, { useEffect } from "react";

const Child = ({ callBack }) => {
  //   console.log("run");
  // useEffect(() => {
  //   callBack();
  // }, []);

  return <div>Child</div>;
};

export default React.memo(Child);
