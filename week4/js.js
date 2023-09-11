// let a = 1, b = 2, c = 3; console.log(a, b, c);
// [a, b, c] = [a, c, b]; console.log(a, b, c);
// [a, b, c] = [c, b, a]; console.log(a, b, c);
// [a, b, c] = [a, c, b]; console.log(a, b, c);
// [a, b, c] = [c, b, a]; console.log(a, b, c);
// [a, b, c] = [a, c, b]; console.log(a, b, c);

let text = "Abdul earns 2.800.000 rupiahs from salary per month, 5.300.000 rupiahs from freelance per month, and 20.300.000 rupiahs per year.";

// Ekstrak angka dari teks menggunakan metode string
let salary_monthly = parseInt(text.split("earns ")[1].split(" rupiahs")[0].replace(/\./g, ""));
let freelance_monthly = parseInt(text.split(" per month, ")[1].split(" rupiahs")[0].replace(/\./g, ""));
let yearly = parseInt(text.split(" per year.")[0].split(" rupiahs").pop().replace(/\./g, ""));

// Hitung total pendapatan tahunan Abdul
let total_annual_income = (salary_monthly + freelance_monthly) * 12 + yearly;

console.log("Total pendapatan tahunan Abdul adalah " + total_annual_income.toLocaleString('id-ID') + " rupiah.");