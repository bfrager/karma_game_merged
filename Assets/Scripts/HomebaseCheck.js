static var finished = false;
private var treasureOnly = false;
private var bossOnly = false;
private var neither = true;
private var drawGUI = false;

function Start() {
    finished = false;
}

function OnTriggerEnter (other : Collider) {
    drawGUI = true;
    if (other.gameObject.tag == "Player") { 
        if (TriggerCollect.all == true && PlayerStats.beatAllBoss == true) {
            GetComponent.<AudioSource>().Play();
            GetComponent.<AudioSource>().loop = true;
            finished = true;
            neither = false;
            treasureOnly = false;
            bossOnly = false;
        } 
        if (finished == false && TriggerCollect.all == true) {
            treasureOnly = true;
            neither = false;
        } 
        if (finished == false && PlayerStats.beatAllBoss == true) {
            bossOnly = true;
            neither = false;
        } 
        if (TriggerCollect.all == false && PlayerStats.beatAllBoss == false) {
            neither = true;
        }
    }
}

    function OnTriggerExit (other : Collider) {
        Debug.Log("I left homebase");
        Debug.Log(drawGUI);
    if (other.gameObject.tag == "Player") { 
        
        drawGUI = false;
        Debug.Log(drawGUI);
   }
}

function OnGUI() {
    if (drawGUI == true) {
        if (neither == true) {
            GUI.Box(Rect(Screen.width*0.25-51,200,300,25), "Find all treasures hidden in GA!");

        } else if (treasureOnly == true) {
            GUI.Box (Rect(Screen.width*0.25-51, 200, 300, 25), "All treasure found!Now beat the boss!");
        } else if (bossOnly == true) {
            GUI.Box(Rect(Screen.width*0.25-51,200,300,22), "Find all treasures!");
        } else if (finished == true) {
            GUI.Box(Rect(Screen.width*0.25+65,200,300,22), "Congrats!");
        }
    }    
}