export const Pajak = (gaji) => {
  const GajiBersih = gaji - (10 / 100) * gaji;
  return `GajiBersih anda yaitu ${GajiBersih}`;
};

export const Sapaan = (nama) => {
  return `hallo ${nama}`;
};
