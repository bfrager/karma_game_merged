#pragma strict

// loads basic-blockout scene when up arrow is pressed
function Update () {
	if(Input.GetKey("up"))
		Application.LoadLevel("basic-blockout");
}