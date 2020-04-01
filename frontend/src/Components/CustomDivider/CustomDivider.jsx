import React from "react";
import { Typography } from "@material-ui/core/";

import "./CustomDivider.scss";

const CustomDivider = () => {
  return (
    <div className="divider">
      <div className="filter-gradient">
        <Typography className="divider-text" variant="h3" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    </div>
  );
};

export default CustomDivider;
