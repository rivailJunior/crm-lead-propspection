import { generateFakeScore } from "./random-score";

describe("Random score", () => {
  it.each([
    [1, 100],
    [5, 100],
    [15, 100],
    [25, 100],
    [35, 100],
    [45, 100],
    [55, 100],
    [65, 100],
    [75, 100],
    [85, 100],
  ])("should return number between: %s and %s", (min, max) => {
    const result = generateFakeScore(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
