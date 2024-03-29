export const daysLeft = (currentDate: number, createdAt: number): string => {
  const days = Math.floor(
    (currentDate - createdAt) / (24 * 60 * 60 * 1000)
  ).toString();

  if (days[days.length - 1] === "1") {
    return `${days} день назад`;
  } else if (["2", "3", "4"].includes(days[days.length - 1])) {
    return `${days} дня назад`;
  }
  return `${days} дней назад`;
};
