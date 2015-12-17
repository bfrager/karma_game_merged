using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {

	public void RespawnPlayer(){
		Debug.Log("Player has respawned ");
	}
	public void LoadLevel(){
		Debug.Log("Start!");
		Application.LoadLevel("Level 1");
	}
	public void QuitGame(){
		Debug.Log("Quit");
		Application.Quit();
	}
	public void MainMenu(){
		Application.LoadLevel("Level 0");
	}
}
