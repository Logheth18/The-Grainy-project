const commentDiv="";

function submitComment() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    if (name && email && comment) {
      // Create a new comment div
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

      // Add the content to the new div
      commentDiv.innerHTML = `
        <strong>${name}</strong> says <br>
        <p>${comment}</p>
      `;

      // Append the new comment to the comments list
      document.getElementById("commentsList").appendChild(commentDiv);

      // Clear the form
      // document.getElementsByClassName("comment_form").reset(); 
      document.getElementById("comment").value='';
      document.getElementById("email").value='';
      document.getElementById("name").value='';

    }
  }