const avatarPreview = document.getElementById("avatar-preview");
const styleButtons = document.querySelectorAll(".style-btn");
const downloadBtn = document.getElementById("download-btn");
const resetBtn = document.getElementById("reset-btn");

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedStyle = button.getAttribute("data-style");

    styleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const classes = avatarPreview.className
      .split(" ")
      .filter((c) => !c.startsWith("style-"));
    avatarPreview.className = classes.join(" ").trim();

    avatarPreview.classList.add(selectedStyle);

    if (selectedStyle === "style-monet") {
      avatarPreview.style.filter =
        "contrast(0.9) brightness(1.05) sepia(0.1) blur(0.4px)";
      avatarPreview.style.padding = "8px";
      avatarPreview.style.objectPosition = "center center";
    } else if (selectedStyle === "style-sunshine") {
      avatarPreview.style.filter = "sepia(0.3) brightness(1.1) saturate(1.3)";
      avatarPreview.style.padding = "8px";
      avatarPreview.style.objectPosition = "center center";
    } else if (selectedStyle === "style-cat") {
      avatarPreview.style.filter = "brightness(1.02) saturate(1.1)";
      avatarPreview.style.padding = "8px";
      avatarPreview.style.objectPosition = "center center";
    } else if (selectedStyle === "style-noir") {
      avatarPreview.style.filter = "grayscale(100%)";
      avatarPreview.style.padding = "8px";
      avatarPreview.style.objectPosition = "center center";
    } else {
      avatarPreview.style.filter = "none";
      avatarPreview.style.padding = "8px";
      avatarPreview.style.objectPosition = "center center";
    }
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

resetBtn.addEventListener("click", () => {
  const classes = avatarPreview.className
    .split(" ")
    .filter((c) => !c.startsWith("style-"));
  avatarPreview.className = classes.join(" ").trim();

  styleButtons.forEach((btn) => btn.classList.remove("active"));

  avatarPreview.style.filter = "none";
  avatarPreview.style.transform = "scale(0.95)";

  setTimeout(() => {
    avatarPreview.style.transform = "scale(1)";
  }, 150);
});

/*Upload*/

const fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", function (e) {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      avatarPreview.src = e.target.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  }
});

downloadBtn.addEventListener("click", () => {
  const originalText = downloadBtn.innerText;
  downloadBtn.innerText = "Capturing...";
  downloadBtn.style.opacity = "0.7";

  html2canvas(avatarPreview, {
    backgroundColor: null,
    useCORS: true,
    scale: 2,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-iconic-avatar.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    downloadBtn.innerText = originalText;
    downloadBtn.style.opacity = "1";
  });
});
