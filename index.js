const avatarPreview = document.getElementById("avatar-preview");
const styleButtons = document.querySelectorAll(".style-btn");
const downloadBtn = document.getElementById("download-btn");

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

//Download the new avatar
downloadBtn.addEventListener("click", () => {
  const avatarContainer = document.getElementById("avatar-preview");

  html2canvas(avatarContainer, {
    backgroundColor: null,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-iconic-avatar.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

//Reset button

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  avatarPreview.classList.remove(
    "style-professional",
    "style-funny",
    "style-cyber"
  );

  avatarPreview.style.transform = "scale(0.95)";
  setTimeout(() => {
    avatarPreview.style.transform = "scale(1)";
  }, 150);
});
