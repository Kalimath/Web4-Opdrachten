var xhrStatus = new XMLHttpRequest();
window.onload = getStatus;

function getStatus() {
    xhrStatus.open("GET", "Controller?action=GetUserFromSession", true);
    alert("getStatus called!!");
    xhrStatus.onreadystatechange = getStatusData;
    xhrStatus.send(null);
}

function getStatusData () {
    if (xhrStatus.status == 200) {
        if (xhrStatus.readyState == 4) {
            alert(xhrStatus.responseText);
            let serverResponse = JSON.parse(xhrStatus.responseText);
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