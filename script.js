function calculateTotal() {
  const expenseInputs = document.querySelectorAll('.expense');
  let totalCost = 0;

  expenseInputs.forEach(input => {
    if (input.value !== '') {
      totalCost += parseFloat(input.value);
    }
  });

  const totalCostOutput = document.getElementById('totalCost');
  totalCostOutput.textContent = `$${totalCost.toFixed(2)}`;
}
