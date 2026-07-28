'use client'; // Required in Next.js for client side interactivity/forms

import { useState } from 'react';

export default function MortgagePage() {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '30',
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const { loanAmount, interestRate, loanTerm } = formData;
    // Interfacing with your Java Spring Boot local instance
    const url = `http://localhost:8080/api/mortgage/calculate?loanAmount=${loanAmount}&annualInterestRate=${interestRate}&termInYears=${loanTerm}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error();
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(true);
      console.error('Backend communication failed.');
    }
  };

  return (
    <main class="view-section">
      <section class="calculator-wrapper">
        <div class="calculator-card">
          <div class="calc-header">
            <h2>Home Loan Assessment Engine</h2>
            <p>
              Enter your purchasing parameters to evaluate fixed-rate terms
              computed by our secure Java Spring Boot API.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Total Loan Principal ($)</label>
              <input
                type="number"
                placeholder="e.g., 450000"
                value={formData.loanAmount}
                onChange={(e) =>
                  setFormData({ ...formData, loanAmount: e.target.value })
                }
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Annual Percentage Rate (%)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g., 6.5"
                  value={formData.interestRate}
                  onChange={(e) =>
                    setFormData({ ...formData, interestRate: e.target.value })
                  }
                  required
                />
              </div>

              <div class="form-group">
                <label>Amortization Period</label>
                <select
                  value={formData.loanTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, loanTerm: e.target.value })
                  }
                >
                  <option value="15">15-Year Fixed</option>
                  <option value="30">30-Year Fixed</option>
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn-primary full-width">
              Execute Calculation
            </button>
          </form>

          {error && (
            <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
              Could not connect to calculation server.
            </p>
          )}

          {results && (
            <div class="results-container">
              <div class="result-highlight">
                <span>Estimated Monthly Payment</span>
                <h3>${results.monthlyPayment.toLocaleString()}</h3>
              </div>
              <div class="result-details">
                <p>
                  Total Installment Schedule:{' '}
                  <strong>{results.totalPayments} payments</strong>
                </p>
                <p>
                  Aggregated Interest Overhead:{' '}
                  <strong>${results.totalInterest.toLocaleString()}</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
