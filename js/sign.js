const form = document.getElementById("signupform");

form.addEventListener("submit", function (event) {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const passwordCheck = document.getElementById("passwordCheck").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  let isValid = true;

  //이전 오류 메세지 지우기
  document.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });

  // 1. 아이디 검사
  const idPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_]{4,20}$/;

  if (!idPattern.test(userId)) {
    isValid = false;
    // alert("유효하지 않습니다");
    document.getElementById("userIderror").textContent =
      "아이디가 잘못 되었습니다";
  }

  // 2.비밀번호 검사 -8자 이상
  if (password.length < 8) {
    isValid = false;
    // alert("유효하지 않습니다");
    document.getElementById("passworderror").textContent = " 잘못 되었습니다";
  }
  // 비밀번호확인검사
  if (passwordCheck == "") {
    isValid = false;
  } else if (password != passwordCheck) {
    isValid = false;
    // alert("유효하지 않습니다");
    document.getElementById("passwordCheckError").textContent =
      " 잘못 되었습니다";
  }

  //이름 검사 -- 빈칸
  if (name == "") {
    isValid = false;
    // alert("유효하지 않습니다");
    document.getElementById("userIderror").textContent = "잘못 되었습니다";
  }
  // email  빈칸 검사 하고 형식검사

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email == "") {
    isValid = false;
  } else if (!emailRegex.test(email)) {
    isValid = false;
    // alert("유효하지 않습니다");
    document.getElementById("userIderror").textContent = " 잘못 되었습니다";
  }

  // 사용자에게 입력받은 데이터 제출을 막고 밑에서 유효성 검사
  if (isValid == false) {
    event.preventDefault();
  }
});
