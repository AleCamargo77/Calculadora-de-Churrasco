function resultBtn() {
    const man = document.getElementById('manCalc').value;
    const woman = document.getElementById('womanCalc').value;
    const child = document.getElementById('childCalc').value;

    let isValid = validateChild(man, woman, child);

    if (isValid == true) {

        let resultBovineMan = (man * 0.25);
        let resultChickenMan = (man * 0.10);
        let resultSausageMan = (man * 0.15);

        let resultBovineWoman = (woman * 0.15);
        let resultChickenWoman = (woman * 0.06);
        let resultSausageWoman = (woman * 0.09);

        let resultBovineChild = (child * 0.10);
        let resultChickenChild = (child * 0.04);
        let resultSausageChild = (child * 0.06);

        let resultBovineTot = parseFloat(resultBovineMan + resultBovineWoman + resultBovineChild).toFixed(3);
        let resultChickenTot = parseFloat(resultChickenMan + resultChickenWoman + resultChickenChild).toFixed(3);
        let resultSausageTot = parseFloat(resultSausageMan + resultSausageWoman + resultSausageChild).toFixed(3);
        const resultBovineTotFormatado = parseFloat(resultBovineTot);
        const resultChickenTotFormatado = parseFloat(resultChickenTot);
        const resultSausageTotFormatado = parseFloat(resultSausageTot);

        let resultTotal = parseFloat(resultBovineTotFormatado + resultChickenTotFormatado + resultSausageTotFormatado).toFixed(3);

        document.getElementById('tittle').innerHTML = `Lista de Carnes`;
        document.getElementById('result').innerHTML = `Bovino: ${resultBovineTot} Kg`;
        document.getElementById('resultChicken').innerHTML = `Frango: ${resultChickenTot} Kg`;
        document.getElementById('resultSausage').innerHTML = `Linguiça: ${resultSausageTot} Kg`;
        document.getElementById('resultTotal').innerHTML = `Total: ${resultTotal} Kg `
        document.getElementById('tittle').style.display = 'block';
        document.getElementById('result').style.display = 'block';
        document.getElementById('resultChicken').style.display = 'block';
        document.getElementById('resultSausage').style.display = 'block';
        document.getElementById('resultTotal').style.display = 'block';
    }
}

function validateChild(man, woman, child) {
    if (child > 0 && man == "" && woman == "") {
        return alert('Necessário informar um adulto acompanhante');
    } else if (man < 0 || woman < 0 || child < 0) {
        return alert('Informe um valor válido');
    }
    return true;
}

function clearResults() {
    tittle.innerHTML = "";
    result.innerHTML = "";
    resultChicken.innerHTML = "";
    resultSausage.innerHTML = "";
    resultTotal.innerHTML = "";
    document.getElementById('resultChicken').style.display = 'none';
    document.getElementById('resultSausage').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}