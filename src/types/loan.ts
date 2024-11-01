export interface LoanSummary {
    totalPrincipal: number;
    totalInterest: number;
    totalPayment: number;
    payoffDate: string;
  }
  
  export interface AmortizationRow {
    paymentDate: string;
    principal: number;
    interest: number;
    monthlyTotal: number;
    balance: number;
  }