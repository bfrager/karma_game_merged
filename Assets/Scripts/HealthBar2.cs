using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class HealthBar2 : MonoBehaviour {

	public float speed;

	public RectTransform healthTransform;
	private float cachedY;
	private float minXValue;
	private float maxXValue;
	private int currentHealth;

	private int CurrentHealth{
		get { return currentHealth;}
		set { 
			currentHealth = value;
			HandleHealth();
		}
	}

	public int maxHealth;
	public Text healthText;
	public Image visualHealth;
	public float coolDown;
	private bool onCooldown;

	// Use this for initialization
	void Start () {
		cachedY = healthTransform.position.y;
		maxXValue = healthTransform.position.x;
		minXValue = healthTransform.position.x - healthTransform.rect.width;
		currentHealth = maxHealth;
		onCooldown = false;
	}
	
	// Update is called once per frame
	void Update () {
		HandleMovement();

	}

	// coroutine
	IEnumerator CoolDownDamage() {
		onCooldown = true;
		yield return new WaitForSeconds(coolDown);
		onCooldown = false;
	}

	private void HandleHealth(){
		// changes position of health
		healthText.text = "Health: " + currentHealth;

		float currentXValue = MapValues(currentHealth, 0, maxHealth, minXValue, maxXValue);

		healthTransform.position = new Vector3(currentXValue, cachedY);

		// changes color
		if(currentHealth > maxHealth/2){
			visualHealth.color = new Color32((byte)MapValues(currentHealth, maxHealth/2, maxHealth,255,0),255,0,255);
		}
		else {
			visualHealth.color = new Color32(255,(byte)MapValues(currentHealth, 0, maxHealth/2,0,255),0,255);
		}
	}

	private void HandleMovement() {
		float translation = speed * Time.deltaTime;

		transform.Translate(new Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical") * translation));
	}

	void OnTriggerStay (Collider other) {
		if(other.name == "Damage"){
			Debug.Log("Getting damage");
			if(!onCooldown && currentHealth > 0){
				StartCoroutine(CoolDownDamage());
				CurrentHealth -= 1;
			}
		}
		if(other.name == "Health"){
			Debug.Log("Gaining health");
			if(!onCooldown && currentHealth < maxHealth){
				StartCoroutine(CoolDownDamage());
				CurrentHealth += 1;
			}
		}
	}

	private float MapValues(float x, float inMin, float inMax, float outMin, float outMax){
		return (x - inMin) * (outMax - outMin) / (inMax -inMin) + outMin;
	}
}
