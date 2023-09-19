const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Event listener for the send button
sendButton.addEventListener("click", function () {
  const userMessage = userInput.value;
  displayMessage(userMessage, "user");
  
  // Send userMessage to your backend for processing
  // Receive a response from the chatbot backend and display it
  // You can simulate the chatbot's response for testing
  const botResponse = "This is a simulated response from the chatbot.";
  displayMessage(botResponse, "bot");
  
  userInput.value = ""; // Clear the input field
});

// Function to display a message in the chat history
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatHistory.appendChild(messageElement);
}
