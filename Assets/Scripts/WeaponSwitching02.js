static var currentWeapon = 1;
var maxWeapons = 4;
var theAnimator : Animator;
var RainbowCrossbow : GameObject;
var PetalShotgun : GameObject;
var TeddyGrenade : GameObject;

function Awake() {
    SelectWeapon(currentWeapon);
}

function Update() {
    if (Input.GetAxis("Mouse ScrollWheel") > 0) {
        currentWeapon ++;
        if (currentWeapon == maxWeapons) {
            currentWeapon = 0;
        }
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }
    else if (Input.GetAxis("Mouse ScrollWheel") < 0) {
        currentWeapon --;
        if (currentWeapon == -1) {
            currentWeapon = maxWeapons;
        }
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }

    if (Input.GetKeyDown(KeyCode.Alpha1)) {
        currentWeapon = 0;
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }
    if (Input.GetKeyDown(KeyCode.Alpha2)) {
        currentWeapon = 1;
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }
    if (Input.GetKeyDown(KeyCode.Alpha3)) {
        currentWeapon = 2;
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }
    if (Input.GetKeyDown(KeyCode.Alpha4)) {
        currentWeapon = 3;
        SelectWeapon(currentWeapon);
        Debug.Log(currentWeapon);
    }
}

function SelectWeapon (index : int) {
    for (var i = 0; i < transform.childCount; i++) {
        if (i == index) {
            transform.GetChild(i).gameObject.SetActive(true);
        } else {
            transform.GetChild(i).gameObject.SetActive(false);
        }
    }
}