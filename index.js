const avatarPreview = document.getElementById("avatar-preview");
const styleButtons = document.querySelectorAll(".style-btn");

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedStyle = button.getAttribute("data-style");

    avatarPreview.classList.remove(
      "style-professional",
      "style-funny",
      "style-cyber"
    );

    avatarPreview.classList.add(selectedStyle);
  });
});
