
var MaxHealth : int = 150;
var Health : int;
static var enemiesKilled : int = 0;

function Start() {
    Health = MaxHealth;
    enemiesKilled = 0;
}

function ApplyDamage(TheDamage : int) {
    Health -= TheDamage;
    Debug.Log("Ouch");
    if (Health <= 0) {
        Dead();
    }
}

function Dead() {
    // Destroy (gameObject);
      Debug.Log("Player Dead");
      RespawnMenu.playerDead = true;
}

function RespawnStats(){
    Health = MaxHealth;
}