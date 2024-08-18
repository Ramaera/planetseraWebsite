const currentDate = new Date();
const festivalDate = new Date("2024-08-19"); 

export const isFestivalDay =currentDate.getDate() === festivalDate.getDate() &&currentDate.getMonth() === festivalDate.getMonth() &&currentDate.getFullYear() === festivalDate.getFullYear();