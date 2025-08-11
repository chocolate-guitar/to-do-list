document.getElementById("addBtn").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.style.float = "right";
deleteBtn.addEventListener("click", function() {
    li.remove();
});
li.appendChild(deleteBtn);


// Mark as completed on click (toggle)
li.addEventListener("click", function(e) {
    // Avoid marking as complete if clicking the delete button
    if (e.target.tagName === "BUTTON") return;

    if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
    } else {
        li.style.textDecoration = "line-through";
    }
});


    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
});

document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.getElementById("addBtn").click();
    }
});

