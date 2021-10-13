import { Pajak, Sapaan } from "./Text";

describe("test testing", () => {
  test("should return gaji bersih", () => {
    expect(Pajak(1000000)).toBe(`GajiBersih anda yaitu ${900000}`);
  });

  test("should sapaan nama", () => {
    expect(Sapaan("danang")).toBe(`hallo danang`);
  });
});
