class ScoreCentre {
    scoreForAnswer(answer){
        requestCentre.httpRequest("put", `http://51.143.154.149:8080/code-group/${localStorage.getItem("team_id")}/answers/${answer}` )
    }

    scoreForRogueButton(){
        requestCentre.httpRequest("put", `http://51.143.154.149:8080/code-group/${localStorage.getItem("team_id")}/answers/rogueButtonDone` )
    }
}