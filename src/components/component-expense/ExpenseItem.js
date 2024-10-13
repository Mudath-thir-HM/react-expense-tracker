import ExpenseDate from './componentDate/ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(holdings){

    return (
        <div className="expense-item">
            <ExpenseDate date = {holdings.date}/>
            <div className='expense-item__description'>
                <h2>{holdings.title}</h2>
                <div className='expense-item__price'>${holdings.price}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;