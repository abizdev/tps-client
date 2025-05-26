export const formatNumber = (sum: number | undefined) => {
  return sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
