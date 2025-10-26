import { describe, test, expect } from 'vitest';

import { format } from './phone';

describe('phone', () => {
  describe('format', () => {
    const cases = [
      ['phone', '+34123456789', '+34 123 456 789'],
      ['without prefix', '123456789', '123456789'],
      ['too short', '123', '123'],
      ['two groups', '123456', '123456'],
    ];

    test.each(cases)('%s', (_title, phone, expected) => {
      expect(format(phone)).toEqual(expected);
    });
  });
});
