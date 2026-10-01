type PressEntry = {
  data: {
    status: "draft" | "published";
    date: string;
  };
};

export function publishedPressReleases<T extends PressEntry>(entries: T[]) {
  return entries
    .filter((entry) => entry.data.status === "published")
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
}
