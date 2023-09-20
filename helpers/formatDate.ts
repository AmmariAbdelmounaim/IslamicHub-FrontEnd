export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return {
    day: date.getDate(),
    month: monthNames[date.getMonth()],
  };
};
