import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerSerachComponent } from './farmer-search-card.component';
import { DebugElement } from '@angular/core';
import { myFarmerSearchProvider, FarmerSearchAbstractProvider } from '../provider/Farmer';
import { By, BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

async function delay(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, tempo);
    })
}

let fixture: ComponentFixture<FarmerSerachComponent>;
let de: DebugElement;
let component: FarmerSerachComponent;
let inputs: DebugElement;
let service: myFarmerSearchProvider;

describe('Farmer Test', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatFormFieldModule,
                MatIconModule,
                FormsModule,
                MatInputModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                HttpClientModule,
                BrowserModule,
                BrowserAnimationsModule,
            ],
            declarations: [
                FarmerSerachComponent,
            ], providers: [
                myFarmerSearchProvider,
            ],
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(FarmerSerachComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;


        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('Once the farmer is selected, the farmer’s details should be populated in the correct inputs', async(inject([myFarmerSearchProvider], async (service: myFarmerSearchProvider) => {
        component.farmerSearchAbstractProvider = service;
        component.searchField = "111";
        spyOn(service, "searchFarmers").and.returnValue(Promise.resolve([{ "id": 1, "document": { "documentNumber": "000.000", "documentType": "FAKE1" }, "name": "TESTE MOCK", "address": { "street": "RUA RUI BARBOSA", "state": "PARANÁ", "address": "RUA MOCK", "country": "BRASIL" } }]))
        component.search();
        await delay(2000);
        fixture.detectChanges();
        let el_destinatario = de.query(By.css("#destinatario")).nativeElement.value;
        let el_doc = de.query(By.css("#doc")).nativeElement.value;
        let el_endereco = de.query(By.css("#endereco")).nativeElement.value;

        expect(el_destinatario).toEqual("TESTE MOCK");
        expect(el_doc).toEqual("000.000");
        expect(el_endereco).toEqual("RUA MOCK");
    })));

});
