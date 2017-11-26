/* global test */
/* global expect */

import {toString} from '../index';

test.skip('returns svg toString representation', () => {
	console.log('this is', typeof toString);
	expect(toString('doubt').isEqualTo('<svg>'));
});
