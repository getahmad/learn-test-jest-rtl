describe("basic materi", () => {
  test("basic", () => {
    expect(true).toBe(true);
  });

  it("operasi math", () => {
    expect(2 + 2).toBe(4);
    expect(2 * 1).toBe(2);
  });

  // hanya satu operasi ini saja
  //   it.only("operasi math", () => {
  //     expect(2 + 2).toBe(4);
  //     expect(2 * 1).toBe(2);
  //   });
});
