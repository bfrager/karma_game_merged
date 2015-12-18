var MaxHealth : float = 150;
var Health : float;
var healthBar : UnityEngine.UI.Image;
var healthText : UnityEngine.UI.Text;
static var beatAllBoss = false;

function Start() {
    beatAllBoss = false;
    Health = MaxHealth;
    enemiesKilled = 0;
}

function Update() {
    if (Cigarette.gotCigarette == true && Necklace.gotChain == true && Hat.gotHat == true) {
        beatAllBoss = true;
    }
	// health bar
	healthBar.fillAmount = (Health/MaxHealth);
	healthText.text = "Health: " + Health;
	if(Health >= MaxHealth/2.0f){
		healthBar.color = new Color32(0,255,0,255);
	}
	else{
		healthBar.color = new Color32(255,0,0,255);
	}
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

