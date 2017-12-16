/**
 * @fileoverview Utils services
 */
class Utils {
    public static countDaysBetween(startDate: Date, endDate: Date): number {
        const DAY_LENGTH_MILISECONDS = 1000 * 60 * 60 * 24;

        const startDateMiliSeconds = startDate.getMilliseconds();
        const endDateMiliSeconds = endDate.getMilliseconds();

        const difference = endDateMiliSeconds - startDateMiliSeconds;

        return Math.round(difference/DAY_LENGTH_MILISECONDS);
    }
}

export {Utils}
