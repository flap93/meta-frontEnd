// REMEMBER THIS CODE DOESN'T  RUN ITS JUST AS AN EXAMPLE TO PRACTICE USESTATE

// use state for changing  words to updated
// this file is call ExpenseItem

import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//

const ExpenseItem = (props) => {
  // function click handler
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div>${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change title</button>
    </Card>
  );
};

export default ExpenseItem;
