import './styles/index.css';

const buttons = document.querySelectorAll('.info__choice');
const blocks = document.querySelectorAll('.info__mainInfo');

buttons.forEach(button => {
    const targetBlock = button.getAttribute('data-target');


    button.addEventListener('click', () => {
        blocks.forEach(block => {
            if (block.classList.contains(targetBlock)) {
                block.classList.add("visible");
                block.classList.remove("none");
            } else {
                block.classList.add("none");
                block.classList.remove("visible");
            }
            });



    });
});