// const currentDate = new Date();
// const festivalDate = new Date("2024-08-19");

// export const isFestivalDay =currentDate.getDate() === festivalDate.getDate() &&currentDate.getMonth() === festivalDate.getMonth() &&currentDate.getFullYear() === festivalDate.getFullYear();

const currentDate = new Date();
const startDate = new Date("2024-10-03");
const endDate = new Date("2024-10-11");

export const isFestivalDay = currentDate >= startDate && currentDate <= endDate;
