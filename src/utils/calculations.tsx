import { AmortizationRow } from '../components/LoanCalculatorForm';


export function calculateMonthlyPayment(
  loanAmount: number,
  interestRate: number,
  loanTerm: number
): number {
  const monthlyInterest = interestRate / 100 / 12;
  return loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) / (Math.pow(1 + monthlyInterest, loanTerm) - 1);
} 

export function calculateLoanSummary(
  loanAmount: number, 
  interestRate: number, 
  loanTerm: number, 
  startDate: string
) {
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  const start = new Date(startDate);
  const payoffDate = new Date(start);
  payoffDate.setMonth(payoffDate.getMonth() + loanTerm);
  const payoffDateStr = payoffDate.toLocaleDateString();

  return {
    totalPrincipal: loanAmount,
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    payoffDate: payoffDateStr,
  };
}

export function calculateAmortizationSchedule(
  loanAmount: number,
  interestRate: number,
  loanTerm: number,
  startDate: string
): AmortizationRow[] {
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const amortizationSchedule: AmortizationRow[] = [];
  
  let balance = loanAmount;
  let currentDate = new Date(startDate);

  for (let month = 1; month <= loanTerm; month++) {
    const interest = balance * monthlyInterestRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    if (balance < 0) balance = 0; // Ensuring no negative balance at the end

    const row: AmortizationRow = {
      paymentDate: new Date(currentDate).toLocaleDateString(),
      principal: parseFloat(principal.toFixed(2)),
      interest: parseFloat(interest.toFixed(2)),
      monthlyTotal: parseFloat(monthlyPayment.toFixed(2)),
      balance: parseFloat(balance.toFixed(2)),
    };

    amortizationSchedule.push(row);

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return amortizationSchedule;
}
