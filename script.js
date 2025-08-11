document.getElementById("addBtn").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
});
