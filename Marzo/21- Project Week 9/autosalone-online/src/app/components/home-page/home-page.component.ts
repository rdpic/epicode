import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    cars: Car[] = [];
    featuredCars: Car[] = [];
    brands: string[] = [];

    async ngOnInit() {
        await this.loadCars();
    }

    async loadCars() {
        try {
            const response = await fetch('assets/db.json');
            const data: Car[] = await response.json();
            this.cars = data;
            this.brands = [...new Set(data.map(car => car.brand))];
            this.featuredCars = this.selectRandomCars(data, 2);
        } catch (error) {
            console.error('There was an error fetching the cars data:', error);
        }
    }

    selectRandomCars(cars: Car[], count: number): Car[] {
        const shuffled = [...cars].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getAvailabilityClass(available: boolean): string {
        return available ? 'bg-success' : 'bg-danger';
    }
}