"use strict";

const obliczanieDelty = function (a, b, c, d) {
  // Normalizacja wspolczynnikow
  const alpha = b / a;
  const beta = c / a;
  const gamma = d / a;

  const p = (3 * beta - Math.pow(alpha, 2)) / 3;
  const q = (2 * Math.pow(alpha, 3) - 9 * alpha * beta + 27 * gamma) / 27;

  const delta = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  if (delta < 0) {
    // Obliczanie kata theta
    const theta = Math.acos(q / (2 * Math.sqrt(Math.pow(-p / 3, 3))));

    const sqrt_p3 = Math.sqrt(-p / 3);
    const y1 = 2 * sqrt_p3 * Math.cos(theta / 3);
    const y2 = 2 * sqrt_p3 * Math.cos((theta + 2 * Math.PI) / 3);
    const y3 = 2 * sqrt_p3 * Math.cos((theta + 4 * Math.PI) / 3);

    const x1 = y1 - alpha / 3;
    const x2 = y2 - alpha / 3;
    const x3 = y3 - alpha / 3;

    // Sortowanie pierwiastkow rosnaco
    const sortedRoots = [x1, x2, x3].sort((a, b) => a - b);

    // Zaokraglenie i formatowanie wyników do trzech miejsc po przecinku
    const roundedRoots = sortedRoots.map((root) => root.toFixed(3));

    return roundedRoots;
  } else if (delta === 0) {
    // Delta = 0

    const x1 = -Math.cbrt(-q / 2) - alpha / 3;
    const x2 = Math.cbrt(-q / 2) - alpha / 3;
    const roundedRoots = [x1, x2].map((root) => root.toFixed(3));

    return roundedRoots;
  } else {
    // Delta > 0

    const A =
      -Math.sign(q / 2) * Math.pow(Math.abs(q / 2) + Math.sqrt(delta), 1 / 3);
    const B = p !== 0 ? delta / (A !== 0 ? A : 1) : 0;
    const x1 = A + B - alpha / 3;

    const roundedRoots = [x1.toFixed(3)];

    return roundedRoots;
  }
};

try {
  const a = prompt("podaj a");
  const b = prompt("podaj b");
  const c = prompt("podaj c");
  const d = prompt("podaj d");
  const result = obliczanieDelty(a, b, c, d);
  alert(`Pierwiastki równania sześciennego: [${result.join(", ")}]`);
  console.log(`Pierwiastki równania sześciennego: [${result.join(", ")}]`);
} catch (error) {
  console.error(error.message);
}
