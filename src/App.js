import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "car insurance",
      amout: 1000,
      date: new Date(2022, 9, 1),
    },
    {
      title: "school bag",
      amout: 120,
      date: new Date(2022, 5, 23),
    },
    {
      title: "door mat",
      amout: 160,
      date: new Date(2022, 7, 12),
    },
    {
      title: "Pencils",
      amout: 100,
      date: new Date(2022, 9, 10),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amout}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amout}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amout}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amout}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
