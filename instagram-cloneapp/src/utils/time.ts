export const convertTime = (createdAt: string) => {
    const created = new Date(createdAt);
    const now = new Date();
    const diff = Math.floor((now.getTime() - created.getTime()) /1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);
    const week = Math.floor(diff / (86400 * 7));

    if (minutes < 1) return "Baru Saja";
    if (minutes < 60) return `${minutes} menit`;
    if (hours < 24) return `${hours} jam`;
    if (days < 7) return `${days} hari`;
    return `${week} minggu`

};