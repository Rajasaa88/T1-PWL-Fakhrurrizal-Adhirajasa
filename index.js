import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";

// Nama & NIM
console.log(
  chalk.blue.bold("Nama: ") + chalk.red("Fakhrurrizal Adhirajasa") + "\n" +
  chalk.blue.bold("NIM : ") + chalk.yellow("F1D02310049")
);

// Pesan Motivasi (cowsay)
console.log(
  cowsay.say({
    text: "Do what you do kawan",
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
