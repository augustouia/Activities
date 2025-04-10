function computeGrade() {
    const midtermGrade = parseFloat(document.getElementById('midtermGrade').value);
    const finalGrade = parseFloat(document.getElementById('finalGrade').value);
    
    const finalResult = (midtermGrade + finalGrade) / 2;
    document.getElementById('finalResult').innerText = finalResult.toFixed(2);

    let remarks;
    if (finalResult >= 100) {
        remarks = "1.0";
    } else if (finalResult >= 98) {
        remarks = "1.1";
    } else if (finalResult >= 95) {
        remarks = "1.2";
    } else if (finalResult >= 90) {
        remarks = "1.5";
    } else if (finalResult >= 89) {
        remarks = "1.6";
    } else if (finalResult >= 85) {
        remarks = "2.0";
    } else if (finalResult >= 82) {
        remarks = "2.2";
    } else if (finalResult >= 80) {
        remarks = "2.4";
    } else if (finalResult >= 79) {
        remarks = "2.6";
    } else if (finalResult >= 77) {
        remarks = "2.8";
    } else if (finalResult >= 76) {
        remarks = "2.9";
    } else if (finalResult >= 75) {
        remarks = "3.0";
    } else {
        remarks = "5.0";
    }

    document.getElementById('remarksResult').innerText = remarks;
}