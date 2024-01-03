import { TestBed } from '@angular/core/testing';
import { ChildService } from './child.service';

// Straight Jasmine testing with Angular's testing support
describe('ChildService testing with Angular testbed', () => {
    let service: ChildService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ChildService] });
        service = TestBed.inject(ChildService);
    });

    it('GetValue should return real value', () => {
        expect(service.GetValue()).toBe('real value');
    });

    it('GetObservableValue should return value from observable', (done: DoneFn) => {
        service.GetObservableValue().subscribe((value) => {
          expect(value).toBe('observable value');
          done();
        });
    });

    it('GetPromiseValue should return value from a promise', (done: DoneFn) => {
        service.GetPromiseValue().then((value) => {
          expect(value).toBe('promise value');
          done();
        });
    });
});
