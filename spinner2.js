const animations = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 0;
for (let animation of animations) {
  setTimeout(() => {
    if (animation !== '\n') { animation += '   '}
    process.stdout.write('\r' + animation)
  }, delay);
  delay += 50;  
}