var httpRequest;

let btnArr = document.querySelectorAll(".alphabetSection button");
for (var i = btnArr.length - 1; i >= 0; i--) {
	let current = btnArr[i];
	current.addEventListener("click", () => {
		var req = {"letter" : current.innerText.charAt(0).toLowerCase()};
    	makeRequest(JSON.stringify(req))
  });
}

let btnArr2 = document.querySelectorAll(".bottom button");
for (var i = btnArr2.length - 1; i >= 0; i--) {
	let current = btnArr2[i];
	current.addEventListener("click", () => {
    alert(current.innerText)
  });
}

function makeRequest(mv) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    console.log(mv)
    httpRequest.open('POST', 'http://localhost:9000/play');
    httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    httpRequest.send(mv);

  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        getSecretWord();
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

  function getSecretWord() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = secretWordAlertContents;
    httpRequest.open('get', 'http://localhost:9000/secret_word');
    httpRequest.send();

  }

  function secretWordAlertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var res = JSON.parse(httpRequest.response);
        var sw = document.getElementById('secretWord')
        sw.innerText = res.secretWord;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


