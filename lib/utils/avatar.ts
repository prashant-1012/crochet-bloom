export const avatarColors = [
  "bg-coral/15 text-coral-dark",
  "bg-sky/15 text-sky-dark",
  "bg-sage/15 text-sage-dark",
];

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
