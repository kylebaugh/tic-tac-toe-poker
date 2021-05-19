const indexValues = [];

function play(clickedID){
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedID)
    let winner = document.getElementById('winner')
        if (playerSpan.innerText === 'X'){
            playerSpan.innerText = 'O',
            clickedElement.innerText = 'X'
            indexValues[clickedID] = 'X'
            // indexValues.splice(clickedID, 0, 'X')
        }
        else{
            playerSpan.innerText = 'X'
            clickedElement.innerText = 'O'
            indexValues[clickedID] = 'O'
            // indexValues.splice(clickedID, 0, 'O')
        }

    console.log(indexValues)
    for(let i=0; i<indexValues.length; i++){
        if (indexValues[0] === 'X' && indexValues[1] === 'X' && indexValues[2] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            
            }else if(indexValues[0] === 'X' && indexValues[3] === 'X' && indexValues[6] === 'X'){
                    winner.innerText = 'X WINS'
                    console.log('X Wins')
            } 
            else if(indexValues[0] === 'X' && indexValues[4] === 'X' && indexValues[8] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            } else if(indexValues[1] === 'X' && indexValues[4] === 'X' && indexValues[7] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            } else if(indexValues[2] === 'X' && indexValues[4] === 'X' && indexValues[6] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            } else if(indexValues[2] === 'X' && indexValues[5] === 'X' && indexValues[8] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            } else if(indexValues[3] === 'X' && indexValues[4] === 'X' && indexValues[5] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            } else if(indexValues[6] === 'X' && indexValues[7] === 'X' && indexValues[8] === 'X'){
                winner.innerText = 'X WINS'
                console.log('X Wins')
            }
                
            else if(indexValues[0] === 'O' && indexValues[1] === 'O' && indexValues[2] === 'O'){
                    winner.innerText = 'O WINS'
                    console.log('O Wins')
            }else if(indexValues[0] === 'O' && indexValues[3] === 'O' && indexValues[6] === 'O'){
                    winner.innerText = 'O'
                    console.log('O Wins')
            } else if(indexValues[0] === 'O' && indexValues[4] === 'O' && indexValues[8] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            } else if(indexValues[1] === 'O' && indexValues[4] === 'O' && indexValues[7] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            } else if(indexValues[2] === 'O' && indexValues[4] === 'O' && indexValues[6] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            } else if(indexValues[2] === 'O' && indexValues[5] === 'O' && indexValues[8] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            } else if(indexValues[3] === 'O' && indexValues[4] === 'O' && indexValues[5] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            } else if(indexValues[6] === 'O' && indexValues[7] === 'O' && indexValues[8] === 'O'){
                winner.innerText = 'O WINS'
                console.log('O Wins')
            }else if(indexValues[0] !== undefined && indexValues[1] !== undefined && indexValues[2] !== undefined && 
                     indexValues[3] !== undefined && indexValues[4] !== undefined && indexValues[5] !== undefined && 
                     indexValues[6] !== undefined && indexValues[7] !== undefined && indexValues[8] !== undefined){
                    winner.innerText = "CATS GAME"
            }        
    }
}
