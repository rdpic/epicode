import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car.model';

@Component({
    selector: 'app-brand-page',
    templateUrl: './brand-page.component.html',
    styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {
    cars: Car[] = [];
    brand: string | null = null;

    constructor(private route: ActivatedRoute) { }

    async ngOnInit() {
        this.brand = this.route.snapshot.paramMap.get('brand');
        await this.loadBrandCars();
    }

    async loadBrandCars() {
        if (this.brand) {
            try {
                const response = await fetch('assets/db.json');
                const allCars: Car[] = await response.json();
                this.cars = allCars.filter(car => car.brand === this.brand);
            } catch (error) {
                console.error('There was an error fetching the brand cars data:', error);
            }
        }
    }

    getAvailabilityClass(available: boolean): string {
        return available ? 'bg-success' : 'bg-danger';
    }
}