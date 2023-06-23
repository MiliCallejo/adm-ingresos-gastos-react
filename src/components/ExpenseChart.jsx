import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {

    const {transactions} = useGlobalState();

    const totalIncome = transactions
        .filter(transactions => transactions.amount > 0)
        .reduce((acc, transactions) => (acc += transactions.amount), 0)

    const totalExpenses = transactions
        .filter(transactions => transactions.amount > 0)
        .reduce((acc, transactions) => (acc += transactions.amount), 0) * -1

    const totalExpensesPercentage = Math.round((totalExpenses / totalIncome) * 100);
    const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie colorScale={["#e74c3c", "#2ecc71"]}
    data={[
        { x: "INGRESOS", y: totalExpensesPercentage },
        { x: "GASTOS", y: totalIncomePercentage },
    ]}
    animate={{
        duration: 2000,
    }}
    labels={({ datum }) => `${datum.y}%`}   
    labelComponent={<VictoryLabel 
    angle={45}
    style={{
        fill: "white",
    }}
    />}
    />
    )
}

export default ExpenseChart