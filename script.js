// Get all needed elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greetingEl = document.getElementById("greeting");
const attendeeCountEl = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form Submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Increment count
  count++;
  console.log("Total Check-Ins: ", count);

  // Update attendee count on the page
  if (attendeeCountEl) {
    attendeeCountEl.textContent = count;
  }

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  if (progressBar) {
    progressBar.style.width = percentage;
  }

  // Update Team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show success message
  const message = `🎉 Welcome, ${name}! You've been checked in to ${teamName}.`;
  console.log(message);

  // Display the greeting message on the page
  if (greetingEl) {
    greetingEl.textContent = message;
    greetingEl.classList.add("success-message");
    greetingEl.style.display = "block";

    // Hide the message after 4 seconds
    setTimeout(function () {
      greetingEl.style.display = "none";
    }, 4000);
  }

  // Reset form
  form.reset();
  
  // Focus back to name input for next check-in
  nameInput.focus();
});
