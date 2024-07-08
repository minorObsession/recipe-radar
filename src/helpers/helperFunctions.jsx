export function decimalToFraction(decimal) {
  function gcd(a, b) {
    if (b < 0.0000001) return a;
    return gcd(b, Math.floor(a % b));
  }
  if (!decimal || decimal === 0) return;
  if (decimal > 1 || decimal % 1 === 0) return decimal;

  let top = decimal.toString().includes(".")
    ? decimal.toString().split(".")[1].length
    : 0;
  let bottom = Math.pow(10, top);
  let numerator = decimal * bottom;
  let denominator = bottom;

  let commonDenominator = gcd(numerator, denominator);

  return `${numerator / commonDenominator}/${denominator / commonDenominator}`;
}

export function next7Days(offset = 0, isShort = false) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const options = { weekday: isShort ? "short" : "long" };
  return date.toLocaleDateString("en-US", options);
}
