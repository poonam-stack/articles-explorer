import { renderHook } from '@testing-library/react-hooks';
import useMostPopularArticles from '../useMostPopularArticles';
import { ERROR_MSG } from '../../constants';

describe('useMostPopularArticles', () => {
  const mockFetch = jest.fn();
  const originalFetch = global.fetch;
  const originalProcessEnv = process.env.REACT_APP_API_SECRET_KEY;
  beforeAll(() => {
    global.fetch = mockFetch;
    process.env.REACT_APP_API_SECRET_KEY = 'api-key';
  });

  afterAll(() => {
    global.fetch = originalFetch;
    process.env.REACT_APP_API_SECRET_KEY = originalProcessEnv;
  });
  test('should return articles after suucess from api', async () => {
    const ARTICLES = [{ id: 1, title: 'Ttile 1' }];
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ results: ARTICLES }),
    });
    const { result, waitForNextUpdate } = renderHook(() =>
      useMostPopularArticles(),
    );

    expect(result.current.mostPopularArticles).toEqual([]);
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.error).toEqual(null);

    await waitForNextUpdate();

    expect(result.current.mostPopularArticles).toEqual(ARTICLES);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
  });

  test('should return no articles and error when api fails', async () => {
    mockFetch.mockRejectedValueOnce();
    const { result, waitForNextUpdate } = renderHook(() =>
      useMostPopularArticles(),
    );

    expect(result.current.mostPopularArticles).toEqual([]);
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.error).toEqual(null);

    await waitForNextUpdate();

    expect(result.current.mostPopularArticles).toEqual([]);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(ERROR_MSG);
  });
});
