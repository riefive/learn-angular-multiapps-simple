import { ChildService } from './child.service';

// Straight Jasmine testing without Angular's testing support
describe('ChildService testing without Angular testing support', () => {
    let service: ChildService;

    beforeEach(() => {
        service = new ChildService();
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
