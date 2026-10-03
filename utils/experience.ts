import DevConfig from "../developer.json";

export const yearsOfExperience = (now = new Date()): number => {
  const start = new Date(DevConfig.careerStart);
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return Math.floor(months / 12);
};
