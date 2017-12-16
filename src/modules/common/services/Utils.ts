/**
 * @fileoverview Utils services
 */
class Utils {
    public static countDaysBetween(startDate: Date, endDate: Date): number {
        const DAY_LENGTH_MILISECONDS = 1000 * 60 * 60 * 24;

        const startDateMiliseconds = startDate.getTime();
        const endDateMiliseconds = endDate.getTime();

        const difference = Math.abs(endDateMiliseconds - startDateMiliseconds);

        return Math.round(difference/DAY_LENGTH_MILISECONDS);
    }
}

export {Utils}
