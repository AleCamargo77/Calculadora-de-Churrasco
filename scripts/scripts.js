function resultBtn() {
    const man = document.getElementById('manCalc').value;
    const woman = document.getElementById('womanCalc').value;
    const child = document.getElementById('childCalc').value;


        let resultMan = (man * 0.5);
        let resultWoman = (woman * 0.3);
        let resultChild = (child * 0.2);
        let resultTotal = (resultMan + resultWoman + resultChild);
        document.getElementById('result').innerHTML = `Total é de ${resultTotal} Kg`;
    }













