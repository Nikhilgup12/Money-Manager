import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <div className="money-detail-container-list">
      <div className="money-detail-list green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="balance-image"
          alt="balance"
        />
        <div className="rupees-check">
          <p className="money-balance"> Your Balance </p>
          <p className="money" data-testid="balanceAmount">
            {' '}
            RS {balance}{' '}
          </p>
        </div>
      </div>

      <div className="money-detail-list blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="balance-image"
          alt="income"
        />
        <div className="rupees-check">
          <p className="money-balance"> Your Income </p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="money-detail-list purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="balance-image"
          alt="expenses"
        />
        <div className="rupees-check">
          <p className="money-balance"> Your Expenses </p>
          <p className="money" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
