#pragma strict

var Weapon0 : Transform;
var Punch_Damage : int = 30;
var Punch_Range : int = 5;

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
}

function Update() {
    if (RespawnMenu.playerDead == false) {
        if (Input.GetButtonDown("Fire1")) {
            var weapon_num = WeaponSwitching02.currentWeapon;
            var Weapon = "Weapon" + weapon_num;
            Debug.Log("Current weapon = " + Weapon);
            // Weapon.GetComponent(Animation).Play("Attack", PlayMode.StopAll);
            var hit : RaycastHit;
            if (weapon_num > 0) {
                // if (Bullets > 0){
                //     Bullets -= 1;
                //     if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                //         if (hit.distance < Weapon1_Range) { //replace with dynamic weapon variable
                //             hit.transform.SendMessage("ApplyDamage", Weapon1_Damage, SendMessageOptions.DontRequireReceiver);
                //         }
                //     }
                // }
                // else {
                //     Debug.Log("No more shots. Get more ammo!");
                // } 

            } else {
                var anim = Weapon0.GetComponent(Animation);
                anim.Play("punch");
                if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                    if (hit.distance < Punch_Range) {
                        hit.transform.SendMessage("Punch", Punch_Damage, SendMessageOptions.DontRequireReceiver);
                        Debug.Log("Punch");       
                    }    
                }
            }
        }
    }
   
}

// function Reload(){
//     Bullets = MaxBullets;
// }