#pragma strict

#pragma strict
var MaxHealth : int = 100;
var Health : int;
var anim : Animator;




function Start() {
    Health = MaxHealth;
    anim = GetComponent ("Animator");

}

function ApplyDamage(gunDamage : int) {
    Health -= gunDamage;
    anim.SetTrigger("Hit");
    if (Health <= 0) {
        Dead();
    }
}

    function Punch(punch_Damage : int) {
        Health -= punch_Damage;
        if (Health <= 0) {
            Dead();
        }
    }


    function Hug() {
        GetComponent(EnemyAdvancedAI).enabled = false;
        gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color = Color.cyan;
        yield WaitForSeconds(5);
        GetComponent(EnemyAdvancedAI).enabled = true;
        gameObject.transform.GetChild(1).GetComponent.<Renderer>().material.color =Color.white;
    }

        function Dead() {
            if (this.gameObject.tag == "Boss") {
                var belonging : GameObject = this.gameObject.transform.GetChild(0).gameObject;
                belonging.tag = "Pickables";
                belonging.transform.parent = null;
                belonging.GetComponent.<Rigidbody>().useGravity = true;
                belonging.GetComponent.<Rigidbody>().isKinematic = false;
            }
            Destroy (gameObject);
    
        }

        function RespawnStats(){
            Health = MaxHealth;
        }