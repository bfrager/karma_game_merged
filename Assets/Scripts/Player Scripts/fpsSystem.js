#pragma strict

var Weapon0 : Transform;
var Punch_Damage : int = 30;
var Punch_Range : int = 5;
var MaxBullets : int = 30;
static var Bullets : int;
var gunDamage = 50;
var gunRange : int = 100;
var hugRange : int = 10;
var timeBetweenPunch : int;

// var Weapon1 : Transform;
// var Weapon1_Damage : int = 35;
// var Weapon1_Range : float = 50; 

// var Weapon2 : Transform;
// var Weapon2_Damage : int = 25;
// var Weapon2_Range : float = 80;

// var Weapon3 : Transform;
// var Weapon3_Damage : int = 25;
// var Weapon3_Range : float = 80;

// var MaxBullets : int = 5;
// var Bullets : int;

function Start() {
    // Bullets = MaxBullets;
    Cursor.visible = false;
    Screen.lockCursor = true;
    Bullets = MaxBullets;
    timeBetweenPunch = 0;
}

function Update() {
    timeBetweenPunch++;
    if (RespawnMenu.playerDead == false) {
        if (Input.GetButtonDown("Fire1")) {
            if (Bullets > 0){
                Bullets -= 1;
            }
            var hit : RaycastHit;
            if (WeaponSwitching02.currentWeapon == 1 || WeaponSwitching02.currentWeapon == 2 ) {
                if (Bullets >= 0) {
                    if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                        if (hit.distance < gunRange) { //replace with dynamic weapon variable
                            hit.transform.SendMessage("ApplyDamage", gunDamage, SendMessageOptions.DontRequireReceiver);
                        }
                    }
                }
            }
            else if (WeaponSwitching02.currentWeapon == 3) {
                if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                    if (hit.distance < hugRange) { //replace with dynamic weapon variable
                        hit.transform.SendMessage("Hug", SendMessageOptions.DontRequireReceiver);
                    }
                }
            }
        }
        if (Input.GetKeyDown(KeyCode.Q) || Input.GetKeyDown(KeyCode.E) || Input.GetKeyDown(KeyCode.R)) {
            if (WeaponSwitching02.currentWeapon == 0) {
                // var anim = Weapon0.GetComponent(Animation);
                // anim.Play("punch");
                if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                    if (hit.distance < Punch_Range) {
                        if (timeBetweenPunch % 10 == 0) {
                            hit.transform.SendMessage("Punch", Punch_Damage, SendMessageOptions.DontRequireReceiver);
                            Debug.Log("Punch");       }
                       
                    }    
                }
            }
        }
           
    
        
    }
}
   

 function Reload(){
     Bullets = MaxBullets;
 }