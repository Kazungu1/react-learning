import './ExpenseItem.css';


function ExpenseItem() {
    const expenseDate = new Date(2022, 7,14);
    const expenseItem= "School-Bag";
    const expenseAmount = 3500;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseItem}</h2>
        <div className='expense-item__price'> {expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
