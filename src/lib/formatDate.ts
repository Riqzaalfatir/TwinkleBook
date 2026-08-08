const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const weekdayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export const formatDate = (dateString?: string): string => {
  if (!dateString) return "00 Month 0000";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return "00 Month 0000";
  const day = d.getDate();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
};

export const formatDateWithWeekday = (dateString?: string): string => {
  if (!dateString) return "Day, 00 Month 0000";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return "Day, 00 Month 0000";
  const weekday = weekdayNames[d.getDay()];
  const day = d.getDate();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  return `${weekday}, ${day} ${month} ${year}`;
};