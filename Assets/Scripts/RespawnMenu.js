#pragma strict

/*
var lookAround01 : MouseLook;
var lookARound02 : MouseLook;
var charController : CharacterController;
var respawnTransform : Transform;
var gun : fpsSystem;
static var playerDead = false;

function Start() {
    lookAround01 = gameObject.GetComponent(MouseLook);
    lookAround02 = GameObject.Find("Camera").GetComponent(MouseLook);
    charController = gameObject.GetComponent(CharacterController);
    gun = GameObject.Find("M4A1").GetComponent(fpsSystem);

}

function Update () {
    if (playerDead == true) {
        Debug.Log("Respawn Player");
        lookAround01.enabled = false;
        lookAround02.enabled = false;
        charController.enabled = false;
        gun.enabled = false;
    }
}*/


var charMotor : CharacterController;
var mono : MonoBehaviour;  // store as a monobebavior
static var playerDead = false;
var respawnTransform: Transform;

function Start() {

    mono =  charMotor.GetComponent("FirstPersonController");
}

function Update() {
    if (playerDead == true) {
        mono.enabled = false;
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.None;
    }

}

function OnGUI() {
    if (playerDead == true) {
        if (GUI.Button(Rect(Screen.width*0.5-50, 200-20, 100, 40), "Respawn")) { // 200 down from the top, 100 width, 40 tall 
            RespawnPlayer();
        }
        if (GUI.Button(Rect(Screen.width*0.5-50, 240, 100, 40), "Menu")) { // 200 down from the top, 100 width, 40 tall 
            Debug.Log("Return to Menu");
        }
    
    }
   
}

function RespawnPlayer(){
    Debug.Log("Player has respawned ");
    transform.position = respawnTransform.position;
    transform.rotation = respawnTransform.rotation;
    gameObject.SendMessage("RespawnStats");
    gameObject.SendMessage("Reload");
    playerDead = false;
    mono.enabled = true;
    Cursor.visible = false; // cursor locked again when player respawns
    Screen.lockCursor = true;
}


