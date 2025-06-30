export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  const sum = arr.reduce((total, num) => total + num, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
