import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";

const ItemDetails = props => {
   return (
    <Fragment>
        <h3> Contact id: {props.item.name} </h3>
        <h3> Detail page stub </h3>
    </Fragment>
  );
};

export default withRouter(ItemDetails);