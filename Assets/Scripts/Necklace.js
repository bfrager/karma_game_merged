var neckPosition : Transform;
var distance : float;
var player : Transform;
static var gotChain = false;

function Start() {
    gotChain = false;
}

function Update () {
   
    if (Input.GetKeyDown(KeyCode.C)) {
        pickup();
    }
}

function pickup() {
    if (this.tag == "Pickables" && this.name == "tonys_chain") {
        gotChain = true;
        distance = Vector3.Distance(this.transform.position, player.transform.position);
        if (distance < 10) {
            GetComponent.<Rigidbody>().useGravity = false;
            GetComponent.<Rigidbody>().isKinematic = true;
            this.transform.position = neckPosition.position;
            this.transform.rotation = neckPosition.rotation;
            this.transform.localScale = neckPosition.localScale;
            this.transform.parent = player.transform;

        }

    }
    
}
