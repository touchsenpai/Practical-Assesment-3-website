function scrollToListings() {
  document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
}

function bookNow(name, price) {
  document.getElementById("selectedRental").textContent = name;
  document.getElementById("selectedPrice").textContent = price;
  document.getElementById("message").textContent = "";
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

function submitBooking() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const rental = document.getElementById("selectedRental").textContent;

  if (rental === "None") {
    document.getElementById("message").textContent = "Please select a rental first.";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (name === "" || email === "" || date === "") {
    document.getElementById("message").textContent = "Please fill out all fields.";
    document.getElementById("message").style.color = "red";
    return;
  }

  document.getElementById("message").textContent =
    `Booking submitted for ${rental}. We will contact you soon.`;
  document.getElementById("message").style.color = "green";
}

function filterListings() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const filterValue = document.getElementById("categoryFilter").value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    const category = card.getAttribute("data-category");

    const matchesSearch = name.includes(searchValue);
    const matchesCategory = filterValue === "all" || category === filterValue;

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}