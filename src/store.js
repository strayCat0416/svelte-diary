import Cookies from 'js-cookie';
import {writable} from 'svelte/store';

//もしCOOKIEにuidがあればCookieのuidを使う
const cookie = Cookies.get('uid');
console.log('Cookie in uid = ' + cookie);
export const userId = writable(cookie ? cookie : null);
