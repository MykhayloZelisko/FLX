let login = prompt("Login", "");
if (login === "" || login === null) {
    alert("Canceled")
} else {
    if (login.length < 4) {
        alert("I do not know anyone having name length less than 4 symbols")
    } else {
        if (login !== "User" && login !== "Admin") {
            alert("I do not know you")
        } else {
            let password = prompt("Password", "");
            if (password === "" || password === null) {
                alert("Canceled")
            } else {
                if (login === "User" && password !== "UserPass" || 
                login === "Admin" && password !== "RootPass") {
                    alert("Wrong password")
                } else {
                    if (new Date().getHours() < 20) {
                        alert(`Good day, dear ${login}!`)
                    } else {
                        alert(`Good evening, dear ${login}!`)
                    }
                }
            }
        }
    }
}