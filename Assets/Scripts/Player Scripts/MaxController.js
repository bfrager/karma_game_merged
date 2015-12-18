#pragma strict

var anim: Animation;

function Start () {
	anim = GetComponent ("Animation");
}

function Update () {
	if (Input.GetKey("space")){
		anim.Play("jump");
	}
	if (Input.GetKeyDown("q")){
		anim.Play("punch");
	}
	if (Input.GetKeyDown("e")){
		anim.Play("kick");
	}
	if (Input.GetKeyDown("r")){
		anim.Play("flip");
	}
	if (Input.GetKey("w") || Input.GetKey("s") || Input.GetKey("a") || Input.GetKey("d")){
		anim.Play("walk");
	}
}