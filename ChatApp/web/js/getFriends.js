var xhr = new XMLHttpRequest();
window.onload = getFriends;

function getFriends() {
    xhr.open("GET", "Controller?action=GetUserFromSession", true);
    xhr.onreadystatechange = getData;
    xhr.send(null);
}

function getData () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            // alert(xhr.responseText);
            let serverResponse = JSON.parse(xhr.responseText);
            let friendsList = serverResponse.friends; // friends list uit JSON
            alert(friendsList);



            let friendsTable = document.getElementById("friendsTbody");
            var friendRow = friendsTable.childNodes[0];

            var friendsLength = friendsList.length;
            for (var i = 0; i < friendsLength; i++) {
                console.log(friendsList[i]);
                if (friendRow == null) {
                    friendRow = document.createElement('tr');
                    friendRow.id = "friendRow"+i;
                    let friendCredits = friendRow.createElement('td');
                    friendCredits = document.createTextNode(friendsList[i]["firstName"]);
                    friendRow.appendChild(friendCredits);
                    //friendRow.appendChild(friendCredits);
                }
                else {
                    let friendCredits = document.createTextNode(friendsList[i]["firstName"]);
                    friendRow.appendChild(friendCredits);
                    //friendRow.appendChild(friendCredits);
                    friendsRows.appendChild(friendRow);
                }
            }


            setTimeout(getFriends, 2000);
        }
    }
}