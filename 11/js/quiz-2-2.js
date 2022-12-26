const button = document.querySelector("button");
const result = document.querySelector("#result");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

button.addEventListener("click", function () {
  //6개 로또 번호 추출
  let { digitCount, maxNumber } = luckyNumber;
  let numberSet = new Set();

  for (let i = 0; i < digitCount; i++) {
    numberSet.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  //Set을 Array로 변환하여 출력
  //앞서 string만으로 했을때 처럼 , 를 넣어주고 맨뒤에 ,를 제거하고 하는 등 작업이 불필요
  result.innerText = `${[...numberSet]}`;
});
