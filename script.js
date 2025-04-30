function openForm(petName) {
  document.getElementById('adoptForm').style.display = 'block';
  document.getElementById('selectedPet').textContent = 'Сіздің таңдауыңыз: ' + petName;
  
  document.getElementById('selectedPetInput').value = petName;
}

function closeForm() {
  document.getElementById('adoptForm').style.display = 'none';
}

function toggleInfo(card) {
  card.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const petCards = document.querySelectorAll(".pet-card");

  searchInput.addEventListener("input", function () {
      const searchValue = searchInput.value.toLowerCase();

      petCards.forEach((card) => {
          const textContent = card.innerText.toLowerCase();
          if (textContent.includes(searchValue)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  });
});

function openDonationPopup() {
  document.getElementById('donationModal').style.display = 'block';
}

function openVolunteerForm() {
  document.getElementById('volunteerModal').style.display = 'block';
}

function closeDonationModal() {
  document.getElementById('donationModal').style.display = 'none';
}

function closeVolunteerModal() {
  document.getElementById('volunteerModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
  }
}

document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("photo");
  const text = document.getElementById("text").value;
  const reader = new FileReader();

  reader.onload = function () {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("user-story");

    const img = document.createElement("img");
    img.src = reader.result;

    const para = document.createElement("p");
    para.textContent = text;

    const commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Пікір қалдыру...";

    const commentButton = document.createElement("button");
    commentButton.textContent = "Пікір жазу";
    commentButton.addEventListener("click", function () {
      if (commentInput.value.trim()) {
        const comment = document.createElement("p");
        comment.textContent = commentInput.value;
        commentSection.querySelector(".comment-list").appendChild(comment);
        commentInput.value = ""; 
      }
    });

    const commentList = document.createElement("div");
    commentList.classList.add("comment-list");

    commentBox.appendChild(commentInput);
    commentBox.appendChild(commentButton);
    commentSection.appendChild(commentBox);
    commentSection.appendChild(commentList);

    storyDiv.appendChild(img);
    storyDiv.appendChild(para);
    storyDiv.appendChild(commentSection);

    document.getElementById("userStories").appendChild(storyDiv);

    document.getElementById("photo").value = "";
    document.getElementById("text").value = "";
  };

  if (fileInput.files[0]) {
    reader.readAsDataURL(fileInput.files[0]);
  }
});