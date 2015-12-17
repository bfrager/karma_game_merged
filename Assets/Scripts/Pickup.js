var onhand : Transform;
static var carrying = false;
var distance : float;
var player : Transform;

function Update () {
   
    if (Input.GetKeyDown(KeyCode.C)) {
        if (carrying == false) {
            pickup();
            carrying = true;
        } 
        else {
           putdown();
            carrying = false;
        }
        
    }
}

function pickup() {
    if (this.tag == "Pickables") {
        distance = Vector3.Distance(this.transform.position, player.transform.position);
        if (distance < 20) {
            GetComponent.<Rigidbody>().useGravity = false;
            GetComponent.<Rigidbody>().isKinematic = true;
            this.transform.position = onhand.position;
            this.transform.parent = GameObject.Find("FirstPersonCharacter").transform;
        }
   
        
    }
    
}

function putdown() {
    if (this.tag == "Pickables") {
    GetComponent.<Rigidbody>().useGravity = true;
    GetComponent.<Rigidbody>().isKinematic = false;
    this.transform.parent = null; 
    }
}