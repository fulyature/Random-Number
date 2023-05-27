//?Random number from 1-15. randon won't repeat number

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const usedNumbers = [];

function getRandomNumber() {
  const randomNumber = randomIntFromInterval(1, 15);

  if (usedNumbers.includes(randomNumber)) return getRandomNumber();
  usedNumbers.push(randomNumber);
  alert(`Numaranız:${randomNumber}`);
  return randomNumber;
}
console.log(usedNumbers, "Used Numbers till now");
