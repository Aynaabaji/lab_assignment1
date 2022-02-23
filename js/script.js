

document.querySelector('#message').style.height = "20px";

function seriesFibon(){
    var n = parseInt((document.getElementById('input').value), 10);
    let s = [0,1,1];
    let d = 1;
    let e = 1;
    let f = d;

    

    for(let i = 3; i<n; i++){
        let nw = s[s.length-1] + s[s.length-2];
        s.push(nw);
    }

    console.log(s);

    document.querySelector('#message').value = s;

    


    document.getElementById('message').style.textAlign = "center";
}
