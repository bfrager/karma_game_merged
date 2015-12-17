#pragma strict
// Define the 2 game objects
var M4A1 : GameObject;
var AK47 : GameObject;

function Update() {
    if (Input.GetKeyDown(KeyCode.Q)) {
        SwapWeapons();
    }
}

function SwapWeapons() {
    if (M4A1.active == true) {
        M4A1.SetActive(false);
        AK47.SetActive(true);
    } else {
        M4A1.SetActive(true);
        AK47.SetActive(false);
    }
}