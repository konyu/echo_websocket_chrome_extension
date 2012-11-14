
$(function() {
now  = new Date();
var ws = $.websocket("ws://127.0.0.1:8080/", {
  events: {
    message: function(e) { $('#content').append(e.data +"  "+ now.toLocaleString()+ '<br>') }
  }
});

$('#message').change(function(){
  ws.send('message', this.value);
  this.value = '';
});

});
