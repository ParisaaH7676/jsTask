//localhost:3000/transactions

let allTransactionsdata = [];
const filters = {
  searchItems: "",
};

http: document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/transactions")
    .then((res) => {
      allTransactionsdata = res.data;
      // render prodocts on Dom
      renderTransactions(res.data, filters);
    })
    .catch((err) => console.log(err));
});

function renderTransactions(transactions, filters) {
  transactions.filter();
}
