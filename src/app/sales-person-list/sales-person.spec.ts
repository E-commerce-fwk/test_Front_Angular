import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson("","","",0)).toBeTruthy();
  });
});
