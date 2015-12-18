
static var collected : int = 0;
static var all = false;

function OnTriggerEnter(other : Collider){
    if (other.gameObject.tag == "Collectables"){
        collected++;
        Destroy(other.gameObject);
        if (collected == 3) {
            all = true;
            Debug.Log("Collected ALL!");
        }
    }
    
}