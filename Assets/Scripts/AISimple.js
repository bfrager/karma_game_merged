
var Distance;
var Target : Transform;
var lookAtDistance : int = 25; // distance when enemy notices the player
var attackRange : int = 15; // distance when enemy will start attacking the player
var moveSpeed : int = 5; // increase the speed of enemy when enemy ready to attack
// damping is used to smooth out of the rotaiton of the enemy
var Damping : int = 6;

function Update() {
    // measure the distance between the target and player as a straight line
    Distance = Vector3.Distance(Target.position, transform.position);

    if (Distance < lookAtDistance) {
        // if the distance between the enemy and the player is less than the lookAtDistance, then change enemy color to yellow and invoke lookAt
        GetComponent.<Renderer>().material.color = Color.yellow;
        lookAt();
    }
    if (Distance > lookAtDistance) {
        // want enmey to ignore player
        GetComponent.<Renderer>().material.color = Color.green;
    }
    if (Distance < attackRange) {
        GetComponent.<Renderer>().material.color = Color.red;
        attack();
    }
    
}

function lookAt() {
    var rotation = Quaternion.LookRotation(Target.position - transform.position);
    // change the current rotationof the enemy towards the player
    // deltaTime is used so that no matter what timeframe we are using, the rotation will be smooth
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function attack() {
    transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
}