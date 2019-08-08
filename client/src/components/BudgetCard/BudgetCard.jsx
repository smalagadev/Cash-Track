import React from 'react';
import './BudgetCard.css';
import '../MoneyButton/AddBalance';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const BudgetCard = (props) => {
  return (
    <div>
      <Card className = "BudgetCard">
        <CardBody>
            <CardText>$0.00</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BudgetCard;