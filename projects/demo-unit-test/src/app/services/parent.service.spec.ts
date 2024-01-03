import { ChildService, ChildFakeService } from './child.service';
import { ParentService } from './parent.service';

// Straight Jasmine testing without Angular's testing support
describe('ParentService testing without Angular testing support', () => {
    let parentService: ParentService;

    it('GetValue should return real value from the real service', () => {
        parentService = new ParentService(new ChildService());
        expect(parentService.GetValue()).toBe('real value');
    });

    it('GetValue should return faked value from a fakeService', () => {
        parentService = new ParentService(new ChildFakeService());
        expect(parentService.GetValue()).toBe('faked service value');
    });
    
    it('GetValue should return faked value from a fake object', () => {
        const fake = { GetValue: () => 'fake value' };
        parentService = new ParentService(fake as ChildService);
        expect(parentService.GetValue()).toBe('fake value');
    });

    it('GetValue should return stubbed value from a spy', () => {
        // create `getValue` spy on an object representing the ValueService
        const childServiceSpy = jasmine.createSpyObj('ChildService', ['GetValue']);
    
        // set the value to return when the `getValue` spy is called.
        const stubValue = 'stub value';
        childServiceSpy.GetValue.and.returnValue(stubValue);
    
        parentService = new ParentService(childServiceSpy);
    
        expect(parentService.GetValue()).withContext('service returned stub value').toBe(stubValue);
        expect(childServiceSpy.GetValue.calls.count())
          .withContext('spy method was called once')
          .toBe(1);
        expect(childServiceSpy.GetValue.calls.mostRecent().returnValue).toBe(stubValue);
      });
});
