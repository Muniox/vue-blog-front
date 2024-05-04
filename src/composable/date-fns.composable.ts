import { format, formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';

export const useDate = (date: Date | undefined) => {
  if (!date) {
    return null;
  }

  const postDate = new Date(date);
  const now = new Date();
  const isWithin7Days = now.getTime() - postDate.getTime() <= 7 * 24 * 60 * 60 * 1000;

  return isWithin7Days
    ? formatDistanceToNow(postDate, { addSuffix: true, locale: pl })
    : format(postDate, 'dd-MM-yyyy');
};
