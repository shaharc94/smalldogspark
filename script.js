document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("userList");
    const addUserBtn = document.getElementById("addUserBtn");

    // הוספת משתמש לרשימה
    addUserBtn.addEventListener("click", () => {
        const userName = prompt("איך קוראים לך?");
        if (!userName) return;

        const listItem = document.createElement("li");
        listItem.textContent = userName;

        // יצירת כפתור הסרה
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✖";
        removeBtn.className = "remove-btn";

        // לחיצה על כפתור הסרה
        removeBtn.addEventListener("click", () => {
            listItem.remove();
        });

        // הוספת הכפתור לרשימה
        listItem.appendChild(removeBtn);
        userList.appendChild(listItem);

        // מחיקת המשתמש מהרשימה אחרי 20 דקות
        setTimeout(() => {
            listItem.remove();
        }, 20 * 60 * 1000); // 20 דקות
    });
});