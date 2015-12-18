var cigPosition : Transform;
var distance : float;
var player : Transform;
static var gotCigarette = false;


function Start() {
    gotCigarette = false;
}
function Update () {
   
    if (Input.GetKeyDown(KeyCode.C)) {
        pickup();
    }
}

function pickup() {
    if (this.tag == "Pickables" && this.name == "philippes_cigs") {
        gotCigarette = true;
        distance = Vector3.Distance(this.transform.position, player.transform.position);
        if (distance < 10) {
            GetComponent.<Rigidbody>().useGravity = false;
            GetComponent.<Rigidbody>().isKinematic = true;
            this.transform.position = cigPosition.position;
            this.transform.rotation = cigPosition.rotation;
            this.transform.localScale =cigPosition.localScale;
            this.transform.parent = player.transform;
        }
    }
    
}
