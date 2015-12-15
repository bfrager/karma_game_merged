#pragma strict

private var theCollider : String;

 
// whenever an object enters the zone
function OnTriggerEnter (other : Collider) {
    theCollider = other.tag;
    // check if the object is the player
    if (theCollider == "Player") { // if it is, then play audio
        GetComponent.<AudioSource>().Play();
        GetComponent.<AudioSource>().loop = true;
    }
}

function OnTriggerExit (other: Collider) {
    theCollider = other.tag;
    // check if the object is the player
    if (theCollider == "Player") { // if it is, then play audio
        // ; stop the audio immediately
        GetComponent.<AudioSource>().Stop();
        GetComponent.<AudioSource>().loop = false;
    }
}