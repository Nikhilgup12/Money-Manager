import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransaction = []

class MoneyManager extends Component {
  state = {
    title: ' ',
    amount: ' ',
    type: ' ',
    transactionlist: initialTransaction,
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }
  onAmount = event => {
    this.setState({amount: event.target.value})
  }
  onType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransactionList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionlist: [...prevState.transactionlist, newTransactionList],
      title: '',
      amount: '',
      type: ' ',
    }))
  }

  deleteHistory = id => {
    const {transactionlist} = this.state
    const filterHistory = transactionlist.filter(each => each.id !== id)
    this.setState({transactionlist: filterHistory})
  }

  render() {
    const {transactionlist} = this.state
    let income = 0
    let expenses = 0
    let balance = 0
    transactionlist.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += parseInt(each.amount)
        balance += parseInt(income)
      } else {
        expenses += parseInt(each.amount)
        balance -= parseInt(expenses)
      }
    })

    return (
      <div className="money-main-container">
        <div className="money-container">
          <div className="money-name-container">
            <h1 className="money-heading"> Hi, Richard </h1>
            <p className="money-para">
              Welcome back to your{' '}
              <span className="money-manager"> Money Manager </span>
            </p>
          </div>
          <MoneyDetails income={income} expenses={expenses} balance={balance} />
          <div className="transaction-detail-container">
            <div className="Transaction-detail">
              <div className="Transaction">
                <h1 className="Transaction-heading"> Add Transaction </h1>
                <form onSubmit={this.onAddTransaction}>
                  <label className="Transaction-label-title" htmlFor="title">
                    TITLE
                  </label>
                  <br />
                  <input
                    id="title"
                    type="text"
                    placeholder="TITLE"
                    className="Transaction-title-input"
                    onChange={this.onTitle}
                  />
                  <br />
                  <label className="Transaction-label-amount" htmlFor="amount">
                    AMOUNT
                  </label>
                  <br />
                  <input
                    id="amount"
                    type="text"
                    placeholder="Amount"
                    className="Transaction-amount-input"
                    onChange={this.onAmount}
                  />
                  <br />
                  <label className="Transaction-label-type" htmlFor="type">
                    TYPE
                  </label>
                  <br />
                  <select
                    id="type"
                    className="Transaction-type-input"
                    onChange={this.onType}
                  >
                    {transactionTypeOptions.map(each => (
                      <option value={each.displayText} key={each.optionId}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                  <div>
                    <button type="submit" className="btn">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="transaction-history-container">
              <div className="Transaction">
                <h1 className="transaction-history-heading"> History </h1>
                <ul className="transaction-history-header">
                  <li className="transaction-list-container">
                    <p className="transaction-title"> Title </p>
                    <p className="transaction-amount"> Amount </p>
                    <p className="transaction-type"> Type </p>
                  </li>

                  {transactionlist.map(each => (
                    <TransactionItem
                      TransactionHistory={each}
                      key={each.id}
                      deleteHistory={this.deleteHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
