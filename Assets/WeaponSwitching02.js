

static var currentWeapon = 0;
var maxWeapons = 2;
var theAnimator : Animator;
var M4A1 : GameObject;
var AK47 : GameObject;
var Grenade : GameObject;

function Awake() {

}

function Update() {
    if (Input.GetAxis("Mouse ScrollWheel") > 0) {
        if (currentWeapon +1 <= maxWeapons) {

            currentWeapon ++;
        } else {
            currentWeapon = 0;
        }
        SelectWeapon(currentWeapon);
    }
    else if (Input.GetAxis("Mouse ScrollWheel") < 0) {
        if (currentWeapon -1 >= 0) {
            currentWeapon --;
        }   
        else {
            currentWeapon = maxWeapons;
        }
        SelectWeapon(currentWeapon);
    }
    if (currentWeapon == maxWeapons +1) {
        currentWeapon = 0;
    }
    if (currentWeapon == -1) {
        currentWeapon = maxWeapons;
    }

    if (Input.GetKeyDown(KeyCode.Alpha1)) {
        currentWeapon = 0;
        SelectWeapon(currentWeapon);
    }
    if (Input.GetKeyDown(KeyCode.Alpha2)) {
        currentWeapon = 1;
        SelectWeapon(currentWeapon);
    }
    if (Input.GetKeyDown(KeyCode.Alpha3)) {
        currentWeapon = 2;
        SelectWeapon(currentWeapon);
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