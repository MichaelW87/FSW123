export default function Die(props){
    return(
    <div id="mainDice">
    <div id="diceBox">
        <div className="die">
            <h1>{props.die1}</h1>
        </div>
        <div className="die">
            <h1>{props.die2}</h1>
        </div>
    </div>
    <div id="btnBox">
        <button onClick = {props.roll} >Roll!</button>
    </div>
</div>
    );
}


