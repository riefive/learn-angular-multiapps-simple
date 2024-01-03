import { TestBed } from '@angular/core/testing';
import { ChildService } from './child.service';
import { ParentService } from './parent.service';

// Straight Jasmine testing without Angular's testing support
describe('ParentService testing with Angular testbed', () => {
    let parentService: ParentService;
    let childServiceSpy: jasmine.SpyObj<ChildService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ChildService', ['GetValue']);
        TestBed.configureTestingModule({
            // Provide both the service-to-test and its (spy) dependency
            providers: [ParentService, { provide: ChildService, useValue: spy }],
        });
        // Inject both the service-to-test and its (spy) dependency
        parentService = TestBed.inject(ParentService);
        childServiceSpy = TestBed.inject(ChildService) as jasmine.SpyObj<ChildService>;
    });

    it('GetValue should return stubbed value from a spy', () => {    
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
