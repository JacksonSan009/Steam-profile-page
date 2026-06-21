export function formatMinutesToHHMM(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${hours.toString().padStart(2, '0')}H ${minutesLeft.toString().padStart(2, '0')}m`;
}
