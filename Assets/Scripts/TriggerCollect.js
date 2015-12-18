
static var collected : int;
static var all = false;

function Start() {
    collected = 0;
    all = false;
}

function OnTriggerEnter(other : Collider){
    if (other.gameObject.tag == "Collectables"){
        collected++;
        Destroy(other.gameObject);
        if (collected == 1) {
            all = true;
            Debug.Log("Collected ALL!");
        }
    }
    
}