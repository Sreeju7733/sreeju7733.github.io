      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyALdzmzyY7Fhh1F0Steny-gybtL1oEhpnw",
        authDomain: "chat-with-me-f5a2a.firebaseapp.com",
        databaseURL: "https://chat-with-me-f5a2a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "chat-with-me-f5a2a",
        storageBucket: "chat-with-me-f5a2a.appspot.com",
        messagingSenderId: "1034868018582",
        appId: "1:1034868018582:web:635da9f00a598d528de1b7",
        measurementId: "G-3EM7XVD3RR"
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.database();
      document.getElementById("message-form").addEventListener("submit", sendMessage);

      function sendMessage(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const messageInput = document.getElementById("message-input");
        const message = messageInput.value;
        messageInput.value = "";
        document.getElementById("messages").scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
        db.ref("messages/" + timestamp).set({
          username,
          message,
        });
      }
      const fetchChat = db.ref("messages/").limitToLast(100);
      fetchChat.on("child_added", function(snapshot) {
        const messages = snapshot.val();
        const message = `
				<li class=${
    username === messages.username ? "sent" : "receive"
  }>
					<span>${messages.username}: </span>${messages.message}
				</li>`;
        // append the message on the page
        document.getElementById("messages").innerHTML += message;
      });
