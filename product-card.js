const charItems = document.querySelectorAll(".all-char__item");

const hiddenBlockMap = {
  description: 1,
  characters: 2,
};

deleteActiveMenu = () => {
  const charItems = document.querySelectorAll(".all-char__item");
  charItems.forEach((charItem) =>
    charItem.classList.contains("active")
      ? charItem.classList.remove("active")
      : null
  );
};

removeActiveBlock = () => {
  const hiddenBlocks = document.querySelectorAll(".all-char__hidden");
  hiddenBlocks.forEach((hiddenBlock) =>
    hiddenBlock.classList.contains("active")
      ? hiddenBlock.classList.remove("active")
      : null
  );
};

setActiveBlock = (hiddenBlockName) => {
  const hiddenBlocks = Array.from(
    document.querySelectorAll(".all-char__hidden")
  );
  const neededBlock = hiddenBlocks.find(
    (hiddenBlock) => hiddenBlock.dataset.hiddenId === hiddenBlockName
  );
  neededBlock.classList.add("active");
};

charItems.forEach((charItem) => {
  charItem.addEventListener("click", (event) => {
    const element = event.target;
    if (!element.classList.contains("active")) {
      deleteActiveMenu();
      removeActiveBlock();
      element.classList.add("active");
      const hiddenBlockName = element.dataset.hidden;
      setActiveBlock(hiddenBlockName);
    }
  });
});
