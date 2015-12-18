#pragma strict
var MaxHealth : int = 100;
static var Health : int;
var anim : Animator;
var animeShooting : MonoBehaviour;

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
            GetComponent(EnemyShooting).enabled = false;
            GetComponent(EnemySight).enabled = false;
            GetComponent(EnemyAI).enabled = false;
            yield WaitForSeconds(10);
            GetComponent(EnemyShooting).enabled = true;
            GetComponent(EnemySight).enabled = true;
            GetComponent(EnemyAI).enabled = true;
    

        }

        function RespawnStats(){
            Health = MaxHealth;
        }
