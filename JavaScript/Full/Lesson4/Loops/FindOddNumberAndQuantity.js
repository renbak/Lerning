let sum = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 1) {
    console.log('Found');
  }
}
for (let i = 0; i <= 1000; i++) {
  sum += i;
}
if (sum * 5 >= 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
