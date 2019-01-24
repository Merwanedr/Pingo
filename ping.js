setInterval(() => {
    var p = new Ping();
    var url = 'http://'+document.getElementById('urlfield').value
document.getElementById("url").innerHTML = (url);
if (url !== '') {
    p.ping(url, function(err, data) {
        // Also display error if err is returned.
      
        document.getElementById("ping-time").innerHTML = ('Latency: '+'~' + String(data) + ' ms');
      if (data < 200) {
          document.getElementById("status").innerHTML = ('Status: <span style="color: green;">&#9673;</span>');
      }
      else {
        document.getElementById("status").innerHTML = ('Status: <span style="color: red;">&#9673;</span>');
      }

      });
}
}, 1000);



