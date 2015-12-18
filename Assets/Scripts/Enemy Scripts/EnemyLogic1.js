#pragma strict
var MaxHealth : int = 100;
static var Health : int;
var anim : Animator;

function Start() {
    Health = MaxHealth;
    anim = GetComponent ("Animator");
}

function ApplyDamage(Damage : int) {
    Health -= Damage;
    anim.SetTrigger("Hit");
    if (Health <= 0) {
        Dead();
    }
}

function Punch(Damage : int) {
    Health -= Damage;
    anim.SetTrigger("Hit");
    if (Health <= 0) {
        Dead();
    } 
}

    function Dead() {
        if (this.gameObject.tag == "Boss") {
            var belonging : GameObject = this.gameObject.transform.GetChild(0).gameObject;
            belonging.tag = "Pickables";
            belonging.transform.parent = null;
            belonging.GetComponent.<Rigidbody>().useGravity = true;
            belonging.GetComponent.<Rigidbody>().isKinematic = false;
        } else {
            GetComponent(EnemyShooting).enabled = false;
            GetComponent(EnemySight).enabled = false;
            GetComponent(EnemyAI).enabled = false;
            yield WaitForSeconds(10);
            GetComponent(EnemyShooting).enabled = true;
            GetComponent(EnemySight).enabled = true;
            GetComponent(EnemyAI).enabled = true;
        
        }
    Destroy (gameObject);
   
    
}

function RespawnStats(){
    Health = MaxHealth;
}