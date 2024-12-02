import { db } from "./firebase.js";
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Add a new donor
document.getElementById("donorForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const bloodGroup = document.getElementById("bloodGroup").value;
  const location = document.getElementById("location").value;
  const contact = document.getElementById("contact").value;

  try {
    await addDoc(collection(db, "donors"), { name, bloodGroup, location, contact });
    alert("Donor registered successfully!");
    document.getElementById("donorForm").reset();
  } catch (error) {
    console.error("Error adding donor: ", error);
  }
});

// Search for donors
document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchBloodGroup = document.getElementById("searchBloodGroup").value;
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "";

  try {
    const q = query(collection(db, "donors"), where("bloodGroup", "==", searchBloodGroup));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      resultsDiv.innerHTML = "<p>No donors found.</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const donor = doc.data();
        resultsDiv.innerHTML += `
          <div>
            <p><strong>Name:</strong> ${donor.name}</p>
            <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
            <p><strong>Location:</strong> ${donor.location}</p>
            <p><strong>Contact:</strong> ${donor.contact}</p>
          </div>
          <hr>
        `;
      });
    }
  } catch (error) {
    console.error("Error searching donors: ", error);
  }
});
