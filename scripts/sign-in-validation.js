const validationMap = {
  require: (value) => {
    return value.trim().length !== 0;
  },
};

const parseValidateInputs = () => {
  const inputs = Array.from(document.querySelectorAll(".input"));
  const validateObject = inputs.map((input) => {
    return {
      element: input,
      validationFunctions: input.dataset.validation,
    };
  });
  return validateObject;
};

const setElementStyle = (resultOfValdations) => {
  resultOfValdations.forEach((result) => {
    const { element, isValid } = result;
    const isElementValid = element.classList.contains("bad-validation");
    if (isElementValid) {
      if (isValid) {
        element.classList.remove("bad-validation");
      }
    } else {
      if (!isValid) {
        element.classList.add("bad-validation");
      }
    }
  });
};

const signUpHandler = (event) => {
  event.preventDefault();
  const validateObjectOfInputs = parseValidateInputs();
  const resultOfValidation = validateObjectOfInputs.map(
    ({ element, validationFunctions }) => {
      const result = {
        isValid: true,
        element,
        validationFunctions,
      };
      const needValidation = validationFunctions?.split(" ");
      const { value: inputValue } = element;
      needValidation?.forEach((validFn) => {
        result.isValid = result.isValid && validationMap[validFn](inputValue);
      });
      return result;
    }
  );
  setElementStyle(resultOfValidation);
};

const signUpButton = document.querySelector(".sign-in__send-button");
signUpButton.addEventListener("click", signUpHandler);
