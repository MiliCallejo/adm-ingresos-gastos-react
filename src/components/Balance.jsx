import { useGlobalState } from "../context/GlobalState";

function Balance() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-center">
        <h4>Balance</h4>
        <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  )
}

export default Balance