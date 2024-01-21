import './index.css'

const TransactionItem = props => {
  const {TransactionHistory, deleteHistory} = props
  const {title, amount, type, id} = TransactionHistory
  const onDeletebtn = () => {
    deleteHistory(id)
  }
  return (
    <li className="transactionItem-list">
      <p className="transcation-salary"> {title} </p>
      <p className="transcation-rupees"> RS {amount} </p>
      <p className="transcation-income"> {type} </p>
      <button className="delete-btn" data-testid="delete" onClick={onDeletebtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
