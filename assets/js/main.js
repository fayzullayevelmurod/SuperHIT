// burger
let burger_btn = document.querySelector(".burger_btn");
let menu_close = document.querySelector(".menu_close");
let menu_bg = document.querySelector(".menu_bg");
let menu = document.querySelector(".menu");

burger_btn.addEventListener("click", () => {
  menu_bg.classList.add("active");
  menu.classList.add("active");
});

menu_close.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  menu.classList.remove("active");
});

menu_bg.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  menu.classList.remove("active");
});

menu.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  menu.classList.remove("active");
});
// burger

try {
  const selectedEl = document.querySelector(".selected-el");
  const options = document.querySelector(".options");
  const optionElements = document.querySelectorAll(".option");
  const selectedText = document.querySelector(".selected-text");

  selectedEl.addEventListener("click", () => {
    options.classList.toggle("show");
    selectedEl.classList.toggle("active");
  });

  optionElements.forEach((option) => {
    option.addEventListener("click", () => {
      selectedText.textContent = option.textContent;
      options.classList.remove("show");
      selectedEl.classList.remove("active");
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!selectedEl.contains(e.target)) {
      options.classList.remove("show");
      selectedEl.classList.remove("active");
    }
  });
} catch (error) {
  console.log(error);
}

try {
  const emailInput = document.getElementById("email-input");
  const emailValidDiv = emailInput.parentElement;

  emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) {
      emailValidDiv.classList.remove("error");
    } else {
      emailValidDiv.classList.add("error");
    }
  });

  function validateEmail(email) {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
} catch (error) {}

