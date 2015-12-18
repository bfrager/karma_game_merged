#pragma strict
var MaxHealth : int = 100;
var Health : int;
var anim : Animator;
var animeShooting : MonoBehaviour;

function Start() {
    Health = MaxHealth;
    anim = GetComponent ("Animator");
}


function Hug() {
    GetComponent(EnemyShooting).enabled = false;
    GetComponent(EnemySight).enabled = false;
    GetComponent(EnemyAI).enabled = false;
    this.gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color = Color.black;
    yield WaitForSeconds(5);
    GetComponent(EnemyShooting).enabled = true;
    GetComponent(EnemySight).enabled = true;
    GetComponent(EnemyAI).enabled = true;
    this.gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color = Color.white;
}

function Punch(punch_Damage : int) {
    Health -= punch_Damage;
    if (Health <= 0) {
        Dead();
    }
}
        function ApplyDamage(gunDamage : int) {
            Health -= gunDamage;
            anim.SetTrigger("Hit");
            if (Health <= 0) {
                Dead();
            }
        }

        function Dead() {
            GetComponent(EnemyShooting).enabled = false;
            GetComponent(EnemySight).enabled = false;
            GetComponent(EnemyAI).enabled = false;
            this.gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color = Color.black;
            yield WaitForSeconds(10);
            GetComponent(EnemyShooting).enabled = true;
            GetComponent(EnemySight).enabled = true;
            GetComponent(EnemyAI).enabled = true;
            this.gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color = Color.white;
            Health = MaxHealth;

        }

        function RespawnStats(){
            Health = MaxHealth;
        }