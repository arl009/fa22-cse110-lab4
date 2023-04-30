function callBack(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const interval = setInterval(callBack, 1000)