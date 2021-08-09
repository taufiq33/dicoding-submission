import $ from 'jquery';
import moment from 'moment';
import "./style/main.css";

let counter = 1;

const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
}

const updateTime = () => {
    displayTime();
    console.log(`${counter}. ${+new Date()}`);
    counter++;
}

displayTime();

setInterval(updateTime, 1000);