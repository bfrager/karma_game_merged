#pragma strict
var MaxHealth : int = 100;
var Health : int;
var anim : Animator;

function Start() {
    Health = MaxHealth;
    anim = GetComponent ("Animator");
}

function ApplyDamage(M4A1Damage : int) {
    Health -= M4A1Damage;
    anim.SetTrigger("Hit");
    if (Health <= 0) {
        Dead();
    }
}

function KnifeCut(KnifeDamage : int) {
    Health -= KnifeDamage;
    anim.SetTrigger("Hit");
    if (Health <= 0) {
        Dead();
    } 
}

    function Dead() {
        if (this.gameObject.name == "Tony") {
            var belonging : GameObject = this.gameObject.transform.GetChild(0).gameObject;
            belonging.tag = "Pickables";
            belonging.transform.parent = null;
            belonging.GetComponent.<Rigidbody>().useGravity = true;
            belonging.GetComponent.<Rigidbody>().isKinematic = false;
        }
    Destroy (gameObject);
    PlayerStats.enemiesKilled ++;
    Debug.Log(PlayerStats.enemiesKilled);
    
}

function RespawnStats(){
    Health = MaxHealth;
}