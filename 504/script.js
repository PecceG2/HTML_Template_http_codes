const stackContainer = document.querySelector('.stack-container');
const cardNodes = document.querySelectorAll('.card-container');
const consoleNodes = document.querySelectorAll('.writing');
const perspecNodes = document.querySelectorAll('.perspec');
const perspec = document.querySelector('.perspec');
const card = document.querySelector('.card');

let counter = stackContainer.children.length;

//function to generate random number
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//after tilt animation, fire the explode animation
card.addEventListener('animationend', function () {
    perspecNodes.forEach(function (elem, index) {
        elem.classList.add('explode');
    });
});

//after explode animation do a bunch of stuff
perspec.addEventListener('animationend', function (e) {
    if (e.animationName === 'explode') {
        cardNodes.forEach(function (elem, index) {

            //add hover animation class
            elem.classList.add('pokeup');

            //generate random number of lines of code between 4 and 10 and add to each card
            let numLines = randomIntFromInterval(5, 10);
            document.getElementById("server-network-connector").style.width = '70%';
            //loop through the lines and add them to the DOM
            for (let index = 0; index < numLines; index++) {
                let lineLength = randomIntFromInterval(25, 97);
                var node = document.createElement("li");
                node.classList.add('node-' + index);

                elem.querySelector('.code ul').appendChild(node).setAttribute('style', '--linelength: ' + lineLength + '%;');

                //draw lines of code 1 by 1
                if (index == 0) {
                    elem.querySelector('.code ul .node-' + index).classList.add('writeLine');
                } else {
                    elem.querySelector('.code ul .node-' + (index - 1)).addEventListener('animationend', function (e) {
                        if(index == numLines-1){
                            node.classList.add('errorLine');
                            elem.querySelector('.code ul .node-' + index).classList.add('writeLine');
                            setTimeout(function() {
                                document.getElementById('errorTag').style.display = 'inline';
                                document.getElementById('errorTag').style.width = '50';
                            }, 2000);
                        }else{
                            elem.querySelector('.code ul .node-' + index).classList.add('writeLine');
                        }
                    });
                }
            }
        });
    }

});