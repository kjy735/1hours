const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_button");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if(fieldValue == "") {
    alert('입력되지 않았습니다.');
    fieldValue.focus();
    return false;
  } else if(timeValue_int == "") {
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if(timeValue_int > 24) {
    alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function() {
    loading.style.display = "none";
    result.style.display = "flex";
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt((10000/timeValue_int), 10); 
                        // 소수점 자리 빼고(나눈값을 나타내겠다, 10진수로)
  }, 1800); // 1.8초 뒤에 (1800ms)
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if(event.target == modal) {
    closeModal();
  }
}

function copyUrl() {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다.")
  });

}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);