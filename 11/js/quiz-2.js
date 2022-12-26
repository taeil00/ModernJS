const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  //6개 로또 번호 추출
  let numberSet = new Set();

  while (numberSet.size !== 6) {
    numberSet.add(getNum());
  }

  //출력
  let resultStr = "";
  for (number of numberSet) {
    resultStr += number;
    resultStr += ",";
  }

  //맨뒤  , 는 제거
  resultStr = resultStr.substring(0, resultStr.length - 1);

  result.innerHTML = resultStr;
});

function getNum() {
  let number = Math.floor(Math.random() * 45 + 1);
  return number;
}
