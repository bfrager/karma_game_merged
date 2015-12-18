// #pragma strict

// public var damage : float = 25f;
// public var shotClip : AudioClip;
// public var flashIntensity : float = 3f;
// public var fadeSpeed : float = 10f; 
// public var lerpedColor : Color = Color.white;

// private var anim : Animator;                                // Reference to the animator.
// private var hash : HashIDs;                             // Reference to the HashIDs script.
// private var laserShotLine : LineRenderer;                   // Reference to the laser shot line renderer.
// private var laserShotLight : Light;            

// function Start () {
//     // Setting up the references.
//     anim = GetComponent(Animator);
//     laserShotLine = GetComponentInChildren(LineRenderer);
//     laserShotLight = GetComponentInChildren(Light);

//     // The line renderer and light are off to start.
//     laserShotLine.enabled = false;
//     laserShotLight.intensity = 0f;

// }

// function Update () {

// 	if (Input.GetButtonDown("Fire1")) {
// 	        Shoot();
			
//     // Fade the light out.
//     laserShotLight.intensity = Mathf.Lerp(laserShotLight.intensity, 0f, fadeSpeed * Time.deltaTime);

// }

// function Shoot ()
// {
//     // The player is shooting.
//     shooting = true;
    
//     playerHealth.ApplyDamage(damage);
    
//     Debug.Log("Player hit for " + damage + " damage . Player Health = " + playerHealth.Health);
    
//     // Display the shot effects.
//     ShotEffects();
// }

// function ShotEffects ()
// {
//     // Set the initial position of the line renderer to the position of the muzzle.
//     laserShotLine.SetPosition(0, laserShotLine.transform.position);
    
//     // Set the end position of the player's centre of mass.
//     laserShotLine.SetPosition(1, player.position + Vector3.up * 1.5f);
    
//     // Turn on the line renderer.
//     laserShotLine.enabled = true;
    
//     // Make the light flash.
//     laserShotLight.intensity = flashIntensity;
    
//     // Play the gun shot clip at the position of the muzzle flare.
//     AudioSource.PlayClipAtPoint(shotClip, laserShotLight.transform.position);
// }

// // Converts a white color to a black one trough time.

// function Update() {
// 	lerpedColor = Color.Lerp(Color.red, Color.blue, Time.time);
	
// }
