import fp from 'lodash/fp'

export const isNotEmpty = fp.complement(fp.isEmpty)
