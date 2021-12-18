const categories = Array.from(
  document.querySelectorAll(".catalog__category-button")
);

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const parentCategory = category.closest(".catalog__category");
    const subcategory = parentCategory.querySelector(".catalog__subcategories");
    const isOpen = subcategory.style.maxHeight;
    if (isOpen) {
      category.classList.remove("active");
      subcategory.style.maxHeight = null;
    } else {
      category.classList.add("active");
      subcategory.style.maxHeight = subcategory.scrollHeight + "px";
    }
  });
});
