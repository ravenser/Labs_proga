import {LightCar, FreightCar} from './lab4.page'
//import {exception} from "console"

describe('LightCar Testing', ()=>{
    let lightCar:LightCar;
    beforeEach(()=>{
        lightCar = new LightCar("Audi", 20);
    })
    fit("Створення екземпляру класу легкового авто", ()=>{
        expect(lightCar).toBeTruthy();
    })

    fit("Розрахунок витрат палива", ()=>{
        lightCar.FuelWasting();
        let fuel = lightCar.FuelWasting();
        let testFuel = 2.5 * lightCar.Vengine;
        expect(fuel.toFixed(2)).toBe(testFuel.toFixed(2));
    })
});

describe('FreightCar Testing', ()=>{
    let freightCar:FreightCar;
    beforeEach(()=>
    {
        freightCar = new FreightCar("ZIL",100);
    })

    fit("Створення екземпляру класу вантажівки", ()=>{
        expect(freightCar).toBeTruthy();
    })

    fit("Розрахунок витрат палива", ()=>{
        freightCar.FuelWasting();
        let fuel = freightCar.FuelWasting();
        let testFuel = 100*freightCar.carrying;
        expect(fuel.toFixed(2)).toBe(testFuel.toFixed(2));
    })
})

