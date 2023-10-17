import DatePurchase from "./DatePurchase";

export default function Expense(props) {

    let amount = Number(props.amount).toLocaleString('it-IT', {style : "currency" , currency : 'EUR'});

    return (
        <li>
            <article className="product">
                <div className="d-flex">
                    <DatePurchase date={props.date} />
                    <h2>{props.title}</h2>
                </div>
                <div> 
                    <div className="expense-item__price">{amount}</div>
                </div>       
            </article>
        </li>
    );
}