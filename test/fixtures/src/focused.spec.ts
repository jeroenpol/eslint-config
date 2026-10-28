fdescribe('focused', () => {
  it.only('runs alone', () => {
    expect(1).toBe(1);
  });

  fit('focused it', () => {
    expect(1).toBe(1);
  });
});
