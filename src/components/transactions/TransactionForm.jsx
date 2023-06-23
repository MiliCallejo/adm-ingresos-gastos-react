import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {

  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-700 text-white px-3 py-2 mb-3 rounded-lg block w-full"
          value={description}>
        </input>
        <input type="number" placeholder="00.00" step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-slate-700 text-white px-3 py-2 mb-3 rounded-lg block w-full"
          value={amount}>
        </input>
        <button className="bg-green-900 text-white px-3 py-2 mb-3 rounded-lg block w-full">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm