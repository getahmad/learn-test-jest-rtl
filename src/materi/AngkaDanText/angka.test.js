import { penjumlahan, perkalian } from "./Angka";

describe("angka testing", () => {
  test("operasi penjumlahan", () => {
    expect(penjumlahan(2, 2)).toBe(4);
    expect(penjumlahan(2, 3)).toBe(5);
  });

  test("should pekalian angka", () => {
    expect(perkalian(2, 3)).toBe(6);
    expect(perkalian(2, 7)).toBe(14);
  });
});
