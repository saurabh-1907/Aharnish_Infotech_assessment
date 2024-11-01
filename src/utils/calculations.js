export function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    const monthlyInterest = interestRate / 100 / 12;
    return loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) / (Math.pow(1 + monthlyInterest, loanTerm) - 1);
  } 
  
  export function calculateLoanSummary(loanAmount, interestRate, loanTerm, startDate) {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;
  
    const start = new Date(startDate);
    const payoffDate = new Date(start.setMonth(start.getMonth() + loanTerm)).toLocaleDateString();
  
    return {
      totalPrincipal: loanAmount,
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      payoffDate,
    };
  }
  