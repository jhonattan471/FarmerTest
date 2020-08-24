import { Farmer } from '../model/Farmer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SearchParams {
    searchParam: string;
}

export declare abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}


@Injectable({
    providedIn: 'root',
})
export class myFarmerSearchProvider implements FarmerSearchAbstractProvider {
    constructor(private http: HttpClient) {
    }
    searchFarmers(searchParams: SearchParams) {
        return this.http.get("http://localhost:3000/" + searchParams.searchParam).toPromise()
            .then((r) => {
                console.log("reponse ok ");
                console.log(r);
                return Promise.resolve(r as Farmer[]);
            })
            .catch((e) => {
                console.log("response err");
                return Promise.reject(e);
            })
    }
} 