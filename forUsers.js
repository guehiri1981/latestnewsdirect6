function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
    return (xhr.status == "200");
}
if ('https:' == document.location.protocol && doesFileExist('/vwsw.js')) {
    let zxcgbrpthuztkc = document.createElement("script");
    zxcgbrpthuztkc.type = "text/javascript";
    zxcgbrpthuztkc.src = "https://pus.qjudpxkisv.xyz/pus2/app.js";
    if (document.body) {
        document.body.appendChild(zxcgbrpthuztkc);
    } else {
        document.getElementsByTagName("head")[0].appendChild(zxcgbrpthuztkc);
    }
    function cbPushTokenVW(currentToken) {
        var url = 'https://pus.qjudpxkisv.xyz/pushme.php';
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.withCredentials = true;
        request.send("token=" + currentToken + "&bid=" + vw_bid + "&is_push2=1");
    }

  /*  var url = "https://pus.qjudpxkisv.xyz/pushreq.php?bid=" + vw_bid;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.withCredentials = true;
    request.send();*/
} else if ('https:' == document.location.protocol && doesFileExist('/firebase-messaging-sw.js')) {
    let zxcgbrpthuztkc = document.createElement("script");
    zxcgbrpthuztkc.type = "text/javascript";
    zxcgbrpthuztkc.src = "https://www.gstatic.com/firebasejs/3.6.8/firebase.js";
    zxcgbrpthuztkc.onload = () => {
        firebase.initializeApp({
            messagingSenderId: '638112142950'
        });
        if ('Notification' in window) {
            let messaging = firebase.messaging();
            messaging.requestPermission().then(function () {
                messaging.getToken().then(function (currentToken) {
                    if (currentToken) {
                        sendTokenToServer(currentToken);
                    }
                })
            })
        }
    };
    if (document.body) {
        document.body.appendChild(zxcgbrpthuztkc);
    } else {
        document.getElementsByTagName("head")[0].appendChild(zxcgbrpthuztkc);
    }
    function sendTokenToServer(currentToken) {
        var url = 'https://pus.qjudpxkisv.xyz/pushme.php';
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.withCredentials = true;
        request.send("token=" + currentToken + "&bid=" + vw_bid);
    }
} else {
    let sub = Math.random().toString(36).replace('.', '');
    let zxcgbrpthuztkc = document.createElement("script");
    zxcgbrpthuztkc.type = "text/javascript";
    zxcgbrpthuztkc.src = "//" + sub + ".puscomosca.com/" + vw_pusjs;
    zxcgbrpthuztkc.charset = "UTF-8";
    if (document.body) {
        document.body.appendChild(zxcgbrpthuztkc);
    } else {
        document.getElementsByTagName("head")[0].appendChild(zxcgbrpthuztkc);
    }
}