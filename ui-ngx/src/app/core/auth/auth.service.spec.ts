///
/// Copyright © 2016-2026 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


import { AuthService } from './auth.service';

describe('AuthService parsePublicId()', () => {

  let service: AuthService;

  beforeEach(() => {
    // Create instance WITHOUT constructor
    service = Object.create(AuthService.prototype);

    // Mock jwtHelper
    (service as any).jwtHelper = {
      decodeToken: jest.fn()
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return public id when token is public', () => {

    jest.spyOn(AuthService, 'getJwtToken')
      .mockReturnValue('fake-token');

    (service as any).jwtHelper.decodeToken.mockReturnValue({
      isPublic: true,
      sub: 'PUBLIC_ID_123'
    });

    const result = service.parsePublicId();

    expect(result).toBe('PUBLIC_ID_123');
  });

  it('should return null when token is not public', () => {

    jest.spyOn(AuthService, 'getJwtToken')
      .mockReturnValue('fake-token');

    (service as any).jwtHelper.decodeToken.mockReturnValue({
      isPublic: false
    });

    const result = service.parsePublicId();

    expect(result).toBeNull();
  });

  it('should return null when no token exists', () => {

    jest.spyOn(AuthService, 'getJwtToken')
      .mockReturnValue(null);

    const result = service.parsePublicId();

    expect(result).toBeNull();
  });

});
