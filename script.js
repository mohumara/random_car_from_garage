

function rollCar() {

    const numOfCars = document.getElementById("numOfCars").value;
    const remark = document.getElementById("remark");
    const carImages = document.getElementById("carImages");
    const values = [];
    const cars = [];

    for (let i = 0; i < numOfCars; i++) {
        const value = Math.floor(Math.random() * 3) + 1;
        values.push(value);
        cars.push(`<img src="car_images/${value}.jpg">`); 
        remark.textContent = `car ${values}`;
        carImages.innerHTML = cars.join(" ");
    }
}