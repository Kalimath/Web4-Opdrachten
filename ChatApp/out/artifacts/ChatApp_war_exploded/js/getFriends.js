var xhrFriends = new XMLHttpRequest();
window.onload = getFriends;
var friendlist = [];

function getFriends() {
    xhrFriends.open("GET", "Controller?action=GetFriends", true);
    xhrFriends.onreadystatechange = getFriendsData;
    xhrFriends.send(null);
}

function getFriendsData() {
    if (xhrFriends.readyState == 4) {
        if (xhrFriends.status == 200) {
            var serverResponse = JSON.parse(xhrFriends.responseText);
            var tableroot = document.getElementById("friendsTable");
            var tbody = tableroot.childNodes[1];
            console.log(serverResponse.length);
            for (var i = 0; i < serverResponse.length; i++) {
                if (friendlist.indexOf(serverResponse[i].userId) < 0) {
                    var tr = document.createElement('tr');
                    for (var j = 0; j < 3; j++) {

                        if (i === 10 && j === 1) {
                            break
                        } else if (j === 1) {
                            let td = document.createElement('td');
                            td.appendChild(document.createTextNode(serverResponse[i].status));

                            tr.appendChild(td);
                        } else if (j === 0) {
                            let td = document.createElement('td');
                            td.appendChild(document.createTextNode(serverResponse[i].userId));
                            tr.appendChild(td);
                            friendlist.push(serverResponse[i].userId);
                        } /*else if (j === 2) {
                            let td = document.createElement('td');
                            let str = '<button id="' + serverResponse[i].userId + '" onclick="openChat(\'' + serverResponse[i].userId + '\');">Message</button>'
                            td.innerHTML = str;
                            tr.appendChild(td);
                            friendlist.push(serverResponse[i].userId);
                        }*/
                    }
                    tbody.appendChild(tr);
                }
            }


            setTimeout(getFriends, 5000);
        }
    }
}