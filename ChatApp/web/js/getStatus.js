var xhr = new XMLHttpRequest();
window.onload = getStatus;

function getStatus() {
    xhr.open("GET", "Controller?action=GetUserFromSession", true);
    xhr.onreadystatechange = getData;
    xhr.send(null);
}

function getData () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            // alert(xhr.responseText);
            let serverResponse = JSON.parse(xhr.responseText);
            console.log(serverResponse.status); // werkt nog niet probeer in console te checken of de property hieronder juist uitkomt
            let status = serverResponse.status; // status property uit JSON



            let statusDiv = document.getElementById("personStatus");
            let statusParagraph = statusDiv.childNodes[0];

            if (statusParagraph == null) {
                statusParagraph = document.createElement('div');
                statusParagraph.id = "newStatusText";
                let statusText = document.createTextNode(status);
                statusParagraph.appendChild(statusText);
                statusDiv.appendChild(statusParagraph);
            }
            else {
                let statusText = document.createTextNode(status);
                statusParagraph.removeChild(statusParagraph.childNodes[0]);
                statusParagraph.appendChild(statusText);
            }
            setTimeout(getStatus, 2000);
        }
    }
}