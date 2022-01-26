export default function TimeFrame(setDate, dueDate) {
  const now = new Date();
  const set = new Date(setDate);
  const due = new Date(dueDate);

  /////ADDED is working fine!
  if (dueDate === null || dueDate === "") {
    const timeDiff = set.getTime() - now.getTime();
    const daysAgo = timeDiff / (1000 * 3600 * 24);
    if (Math.round(daysAgo) === -1) return `Added today.`;
    if (Math.round(daysAgo) === -2) return `Added yesterday.`;
    else return `Added ${Math.abs(Math.round(daysAgo)) - 1} days ago.`;
  }

  /// DUE is working fine!
  else {
    const timeDiff = due.getTime() - now.getTime();
    const daysToGo = timeDiff / (1000 * 3600 * 24) + 1;
    if (Math.round(daysToGo) < 0)
      return `${
        Math.round(daysToGo) === -1
          ? "Late! Due to yesterday!"
          : "I'm " + Math.abs(Math.round(daysToGo)) + " days late"
      }`;
    if (Math.round(daysToGo) === 0) return `Due today!`;
    if (Math.round(daysToGo) === 1) return `Due tomorrow!`;
    else return `Due in ${Math.round(daysToGo)} days.`;
  }
}
