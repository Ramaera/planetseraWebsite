// const currentDate = new Date();
// const festivalDate = new Date("2024-08-19"); 

// export const isFestivalDay =currentDate.getDate() === festivalDate.getDate() &&currentDate.getMonth() === festivalDate.getMonth() &&currentDate.getFullYear() === festivalDate.getFullYear();


const currentDate = new Date();
const startDate = new Date("2025-01-01T00:00:00");
const endDate = new Date("2025-01-05T23:59:59");

export const isFestivalDay = currentDate >= startDate && currentDate <= endDate;
