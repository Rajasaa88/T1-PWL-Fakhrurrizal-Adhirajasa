import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";

// Nama & NIM
console.log(
  chalk.blue.bold("Nama: ") + chalk.red("Fakhrurrizal Adhirajasa") + "\n" +
  chalk.blue.bold("NIM : ") + chalk.yellow("F1D02310049")
);

// Pesan Motivasi (cowsay)
const pesan = gradient.rainbow("Do what you do kawan");

console.log(
  cowsay.say({
    text: pesan,
    e: "^^",
    T: "U ",
    f: "stegosaurus"
  })
);

// Nama dengan ASCII Art
figlet("Rajasa", (err, data) => {
  if (err) {
    console.error("Figlet error:", err);
    return;
  }
  console.log(chalk.cyan(data));
});
