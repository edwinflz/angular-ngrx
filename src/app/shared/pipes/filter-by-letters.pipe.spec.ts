import { FilterByLettersPipe } from './filter-by-letters.pipe';

describe('FilterByLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
