import { TestBed } from '@angular/core/testing';

import { AuthRouteGuard } from './auth-route.guard';

describe('AuthRouteGuard', () => {
  let guard: AuthRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
