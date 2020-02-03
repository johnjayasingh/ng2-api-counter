import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    apiCount: number = 0;

    private api: BehaviorSubject<number> = new BehaviorSubject(this.apiCount);
    apiCountObservable = this.api.asObservable();

    constructor() { }

    addAPI() {
        this.apiCount += 1;
        this.api.next(this.apiCount);
        console.log(`Ongoing API count ${this.apiCount}`)
    }
    removeAPI() {
        this.apiCount -= 1;
        this.api.next(this.apiCount);
        console.log(`Ongoing API count ${this.apiCount}`)
    }
}
