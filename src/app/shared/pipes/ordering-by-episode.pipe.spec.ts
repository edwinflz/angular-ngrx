import { OrderingByEpisodePipe } from './ordering-by-episode.pipe';

describe('OrderingByEpisodePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderingByEpisodePipe();
    expect(pipe).toBeTruthy();
  });
});
