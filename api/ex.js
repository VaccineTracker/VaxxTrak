import { request, fromZipcode } from './api.js';

const state = await fromZipcode('11221');

const moderna = await request('moderna', state);
console.log(moderna);

const pfizer = await request('pfizer', state);
console.log(pfizer);
