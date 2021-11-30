process.stdout.write('hello from spinner1.js ... \rheey\n');
process.stdout.write('\r|   '); // start off animation


for (let i = 0; i <= 5; i++){
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 200 + (800 * i));
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 400 + (800 * i));
  
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 600 + (800 * i));
  
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 800 + (800 * i));
}


