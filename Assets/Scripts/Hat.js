var hatPosition : Transform;
var distance : float;
var player : Transform;
static var gotHat = false;

function Start() {
    gotHat = false;
}

function Update () {
   
    if (Input.GetKeyDown(KeyCode.C)) {
            pickup();
    }
}

function pickup() {
    if (this.tag == "Pickables" && this.name == "jimmys_hat") {
        gotHat = true;
        distance = Vector3.Distance(this.transform.position, player.transform.position);
        if (distance < 10) {
            GetComponent.<Rigidbody>().useGravity = false;
            GetComponent.<Rigidbody>().isKinematic = true;
            this.transform.position = hatPosition.position;
            this.transform.rotation = hatPosition.rotation;
            this.transform.localScale = hatPosition.localScale;
            this.transform.parent = player.transform;
        }
   
        
    }
    
}
