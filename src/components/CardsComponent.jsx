import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "../styles/HomePage.css"
const CardsComponent = ({ title,year,resource_url}) => {
  return (
    <>
      <Card className="productsCard">
      {/* <div className="image">
      <img src={resource_url} className="profilepicture" />
          </div> */}
        <div className="information">
        <CardContent>
          <Typography color="textSecondary" gutterBottom label="title">
            {title}
          </Typography>
          <Typography variant="body2" component="p" label="year">
            {year}
            {/* <br />
            {'"a benevolent smile"'} */}
          </Typography>
        </CardContent>
        </div>
      </Card>
    </>
  );
};

export default CardsComponent;