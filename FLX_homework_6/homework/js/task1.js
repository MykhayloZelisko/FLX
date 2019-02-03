let a = prompt("Enter a", 1);
let b = prompt("Enter b", 0);
let c = prompt("Enter c", 0);
if (!isNaN(parseFloat(a)) && isFinite(a) && (parseFloat(a) !== 0) && 
!isNaN(parseFloat(b)) && isFinite(b) && 
!isNaN(parseFloat(c)) && isFinite(c)) {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        alert("No solution (when Discriminant < 0)");
    } else {
        if (d === 0) {
            let x = - b / (2 * a);
            alert(`x=${x}`);
        } else {
            let x1 = (- b - Math.sqrt(d)) / (2 * a);
            let x2 = (- b + Math.sqrt(d)) / (2 * a);
            alert(`x1=${x1}, x2=${x2}`);
        }
    }
} else {
    alert("Invalid input data");
}