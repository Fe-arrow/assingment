
//let sign = null;
//document.getElementById('youkenn-hiduke').addEventListener('change',function(){
let sign = prompt("課題提出日の年,月,日をカンマ区切りで入力してください");
//})



let nenn = null, gatu = null, niti = null, ji = null, theDate = null;
for (nenn = 2000; nenn < 2100; nenn++) {
    for (gatu = 1; gatu < 13; gatu++) {
        for (niti = 1; niti < 32; niti++) {
           // for (ji = 0; ji < 25; ji++) {
                if (sign === `${nenn},${gatu},${niti}`) {//,${ji}

                    theDate = new Date(nenn, gatu - 1, niti, ji);
                    let now = new Date;
                    let toMiri = theDate - now;
                    let nissuu = toMiri/1000/60/60/24;
                    nissuu = nissuu * 10;
                    nissuu =  Math.floor(nissuu);
                    nissuu = nissuu / 10;
                    



                    alert(`あと${nissuu}日!!!`);
                }

           // }

        }
    }
}








