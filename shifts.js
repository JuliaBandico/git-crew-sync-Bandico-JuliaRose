function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.floor(hours * rate);
  }
  const regularPay = 8 * rate;
  const overtimePay = (hours - 8) * (rate * 1.5);
  return Math.floor(regularPay + overtimePay);
}
