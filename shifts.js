function calculatePay(hours, rate) {
  // Feature logic - bandico.juliarose
  if (hours <= 8) {
    return Math.round(hours * rate);
  }
  const regularPay = 8 * rate;
  const overtimePay = (hours - 8) * (rate * 1.5);
  return Math.round(regularPay + overtimePay);
}
// Main branch update - bandico.juliarose