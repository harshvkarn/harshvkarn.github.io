var chatRequest = new XMLHttpRequest();
var chatstr = '';
chatRequest.open('GET','chat.json');
chatRequest.onload = function() {
	var chatData = JSON.parse(chatRequest.responseText);
	for(var key in chatData)
	{
		chatstr = chatstr + chatData[key].name + ': ' + chatData[key].msg + '\n' ;
		 console.log(chatData[key]);
	}
	document.getElementById('chats').innerHTML = chatstr;
};
chatRequest.send();

////////////////////////////////////////////////////////

function push()
{
	 var name = document.getElementById('name').value;
	 var msg = document.getElementById('msg').value;
	 
	 console.log(msg+ name);

	 var chatPush = new XMLHttpRequest();
     chatPush.open("GET", "send.php?name=" + name + "&msg=" + msg, true);
     // document.getElementById('chats').innerHTML = "";
     chatPush.onreadystatechange = function() {
     	var chatData = JSON.parse(chatRequest.responseText);
		for(var key in chatData)
		{
		chatstr = chatstr + chatData[key].name + ': ' + chatData[key].msg + '\n' ;
		 console.log(msg+ name);
		}
		// document.getElementById('chats').innerHTML = chatstr;

            
        };
        // chatPush.open("POST", "send.php?name=" + name + "&msg=" + msg, true);
        chatPush.send(null);
}