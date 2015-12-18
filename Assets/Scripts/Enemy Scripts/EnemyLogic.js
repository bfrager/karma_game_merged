#pragma strict
var MaxHealth : int = 100;
var Health : int;


function Start() {
    Health = MaxHealth;

}

function ApplyDamage(M4A1Damage : int) {
    Health -= M4A1Damage;
    if (Health <= 0) {
        Dead();
    }
}

    function KnifeCut(KnifeDamage : int) {
        Health -= KnifeDamage;
        if (Health <= 0) {
            Dead();
        } 
    }

        function Dead() {
       
            Destroy (gameObject);
    
        }

        function RespawnStats(){
            Health = MaxHealth;
        }