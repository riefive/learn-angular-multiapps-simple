import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HeroService } from './hero.service';
import { defer } from 'rxjs';

const expectedHeroes: any[] = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
];

function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

describe('HeroService with spies', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let heroService: HeroService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        heroService = new HeroService(httpClientSpy);
    });

    it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {    
        httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
    
        heroService.GetHeroes().subscribe({
          next: (heroes) => {
            expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
            done();
          },
          error: done.fail,
        });

        expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
        const errorResponse = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404,
          statusText: 'Not Found',
        });
      
        httpClientSpy.get.and.returnValue(asyncError(errorResponse));
      
        heroService.GetHeroes().subscribe({
          next: (heroes) => done.fail('expected an error, not heroes'),
          error: (error) => {
            expect(error.message).toContain('test 404 error');
            done();
          },
        });
    });
});

describe('HeroService with mocks', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [HeroService],
        });
    
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        heroService = TestBed.inject(HeroService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should return expected heroes (called once)', () => {
        heroService.GetHeroes().subscribe({
          next: (heroes) =>
            expect(heroes).withContext('should return expected heroes').toEqual(expectedHeroes),
          error: fail,
        });
  
        // HeroService should have made one request to GET heroes from expected URL
        const req = httpTestingController.expectOne(heroService.currentUrl);
        expect(req.request.method).toEqual('GET');
  
        // Respond with the mock heroes
        req.flush(expectedHeroes);
    });

    it('should return expected heroes (called multiple times)', () => {
        heroService.GetHeroes().subscribe();
        heroService.GetHeroes().subscribe();
        heroService.GetHeroes().subscribe({
          next: (heroes) =>
            expect(heroes).withContext('should return expected heroes').toEqual(expectedHeroes),
          error: fail,
        });
  
        const requests = httpTestingController.match(heroService.currentUrl);
        expect(requests.length).withContext('calls to getHeroes()').toEqual(3);
  
        // Respond to each request with different mock hero results
        requests[0].flush([]);
        requests[1].flush([{ id: 1, name: 'bob' }]);
        requests[2].flush(expectedHeroes);
    });

    it('should be OK returning no heroes', () => {
        heroService.GetHeroes().subscribe({
          next: (heroes) =>
            expect(heroes.length).withContext('should have empty heroes array').toEqual(0),
          error: fail,
        });
  
        const req = httpTestingController.expectOne(heroService.currentUrl);
        req.flush([]); // Respond with no heroes
    });

    it('should turn 404 into a user-friendly error', () => {
        const msg = 'Deliberate 404';
        heroService.GetHeroes().subscribe({
          next: (heroes) => fail('expected to fail'),
          error: (error) => expect(error.message).toContain(msg),
        });
  
        const req = httpTestingController.expectOne(heroService.currentUrl);
  
        // respond with a 404 and the error message in the body
        req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
});
