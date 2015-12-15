var Distance;
var Target : Transform;
var lookAtDistance = 15.0;
var chaseRange = 5.0;
var attackRange = 1.5;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;
var TheDamage = 40;
private var attackTime : float;

var controller : CharacterController;
var gravity : float = 20.0;
private var MoveDirection : Vector3 = Vector3.zero;


function Start() {
    attackTime = Time.time;
}


function Update ()
{

    if(RespawnMenu.playerDead == false)  {
        Distance = Vector3.Distance(Target.position, transform.position);
        if (Distance < lookAtDistance)
        {
            lookAt();
        }
		
        if (Distance > lookAtDistance)
        {
            GetComponent.<Renderer>().material.color = Color.green;
        }
		
        if (Distance < attackRange)
        {
            attack();
        }
        else if (Distance < chaseRange)
        {
            chase ();
        }
    }
   
}

function lookAt ()
{
    GetComponent.<Renderer>().material.color = Color.green;
    var rotation = Quaternion.LookRotation(Target.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase ()
{
    GetComponent.<Renderer>().material.color = Color.yellow;
	
    moveDirection = transform.forward;
    moveDirection *= moveSpeed;
	
    moveDirection.y -= gravity * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
}

function attack ()
{
    if (Time.time > attackTime)
    {
        GetComponent.<Renderer>().material.color = Color.red;
        Target.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
        Debug.Log("The Enemy Has Attacked");
        attackTime = Time.time + attackRepeatTime;
    }
}


function ApplyDamage ()
{
    chaseRange += 30;
    moveSpeed += 2;
    lookAtDistance += 40;
}