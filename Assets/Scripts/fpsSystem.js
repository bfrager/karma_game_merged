#pragma strict

var TheDamage : int = 35;
// var AK47Damage : int = 25;
var Distance : float;
var M4A1Range : float = 50; 
// var AK47Range : float = 80;
var M4A1 : Transform;
var AK47: Transform;
var MaxBullets : int = 5;
var Bullets : int;
var KnifeDamage : int = 30;
var KnifeRange : int = 5;

function Start() {
    Bullets = MaxBullets;
    Cursor.visible = false;
    Screen.lockCursor = true;
}

function Update() {
    if (RespawnMenu.playerDead == false) {
        if (Input.GetButtonDown("Fire1")) {
            // M4A1.GetComponent(Animation).Play("Attack", PlayMode.StopAll);
            var hit : RaycastHit;
            if (WeaponSwitching02.currentWeapon <= 1) {
                if (Bullets > 0){
                    Bullets -= 1;
                }
                if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                    Distance = hit.distance;
                    if (Distance < M4A1Range) {
                        if (Bullets > 0) {
                            hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
                            Debug.Log("Attack Enemy!!!!SHOOOTT!");
                        } else {
                            Debug.Log("No more bullets;");
                        }
                    
                    }        
                }
            } else {
                if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
                    Distance = hit.distance;
                    if (Distance < KnifeRange) {

                            hit.transform.SendMessage("KnifeCut", KnifeDamage, SendMessageOptions.DontRequireReceiver);
                            Debug.Log("Knife");
                        
                    
                    }    
                }
            }
 
        }
    }
   


  
}

function Reload(){
    Bullets = MaxBullets;
}