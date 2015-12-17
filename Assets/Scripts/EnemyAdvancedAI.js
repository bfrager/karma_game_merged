var Distance;
var Target : Transform;
var lookAtDistance = 15.0;
var chaseRange = 5.0;
var attackRange = 1.5;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;
var TheDamage = 40;
var attackLag = 1.0;
var anim : Animator;
private var attackTime : float;
private var attackCount : int = 0;

var controller : CharacterController;
var gravity : float = 20.0;
private var MoveDirection : Vector3 = Vector3.zero;


function Start() {
    attackTime = Time.time;
    anim = GetComponent ("Animator");
}


function Update ()
{
    if(RespawnMenu.playerDead == false)  {
        Distance = Vector3.Distance(Target.position, transform.position);
        anim.SetBool("Blocking", false); 
        if (Distance < lookAtDistance)
        {
            lookAt();
        }
		
        if (Distance > lookAtDistance)
        {
            attackCount = 0;
        }
		
        if ((Distance < attackRange) && (attackCount % 2 == 0))
        {
            attack();
            anim.SetTrigger("Punch_Left");
        }
        else if ((Distance < attackRange) && (attackCount % 2 != 0))
        {
            attack();
            anim.SetTrigger("Punch_Right");
        }    
        else if (Distance < chaseRange)
        {
            chase ();
        }
    }
   
}

function lookAt ()
{

    var rotation = Quaternion.LookRotation(Target.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase ()
{

    anim.SetFloat("Forward", moveSpeed);
    moveDirection = transform.forward;
    moveDirection *= moveSpeed;
	
    moveDirection.y = 0;
    controller.Move(moveDirection * Time.deltaTime);
}

function attack ()
{
    if (Time.time > attackTime)
    {
        attackCount++;
        Target.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
        Debug.Log("The Enemy has attacked you " + attackCount + " times this encounter");
        attackTime = Time.time + attackRepeatTime;
        yield WaitForSeconds(attackLag);
    }
    
}


function ApplyDamage ()
{
    chaseRange += 30;
    moveSpeed += 2;
    lookAtDistance += 40;
}