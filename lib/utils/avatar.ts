export const avatarColors = [
  "bg-bloom/15 text-bloom-dark",
  "bg-yarn/15 text-yarn-dark",
];

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
