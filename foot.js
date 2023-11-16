//目玉動かすコード
const irisLeft = document.querySelector('.child-left');
const irisRight = document.querySelector('.child-right');

document.addEventListener('mousemove', (e) => {
  const eyeLeftRect = irisLeft.getBoundingClientRect();
  const eyeRightRect = irisRight.getBoundingClientRect();

  const xLeft = Math.min(Math.max((e.clientX - eyeLeftRect.left) / eyeLeftRect.width * 100, 0), 100);
  const yLeft = Math.min(Math.max((e.clientY - eyeLeftRect.top) / eyeLeftRect.height * 100, 0), 100);

  const xRight = Math.min(Math.max((e.clientX - eyeRightRect.left) / eyeRightRect.width * 100, 0), 100);
  const yRight = Math.min(Math.max((e.clientY - eyeRightRect.top) / eyeRightRect.height * 100, 0), 100);

  irisLeft.style.transform = `translate(calc(${xLeft}% - 50%), calc(${yLeft}% - 50%))`;
  irisRight.style.transform = `translate(calc(${xRight}% - 50%), calc(${yRight}% - 50%))`;
});