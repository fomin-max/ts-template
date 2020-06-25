import fp from 'lodash/fp';
import moment from 'moment';

export const isNotEmpty = fp.complement(fp.isEmpty);

export const formatDate = (ISODate?: string | Date): string =>
  (ISODate ? moment(ISODate).format('DD.MM.YYYY') : '');
