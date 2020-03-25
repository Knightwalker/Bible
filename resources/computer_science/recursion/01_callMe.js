function CallMe() {
  counter++;
  if (counter === 3) {
    return "loops";
  }
  return CallMe("anytime");
}

let counter = 0;
CallMe(); // loops;