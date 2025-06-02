var typed = new Typed(".text", {
    strings: ["Aspiring Backend Developer", "Aspiring Java Developer", "DevOps Enthusiasist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Get the modal
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Attach click event listeners to all 'View Certificate' buttons
document.querySelectorAll(".certificate-content .btn-box").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Get the parent .certificate-box to find the image and title
    const certificateBox = btn.closest(".certificate-box");
    const img = certificateBox.querySelector(".certificate-img img");
    const title = certificateBox.querySelector("h3").innerText;

    // Set modal image src and caption
    modalImg.src = img.src;
    captionText.innerText = title;

    // Show the modal
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Also close modal if user clicks outside the image
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


  