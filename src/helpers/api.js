import {collection, addDoc} from 'firebase/firestore';
import {db} from './firebase';
import dayjs from 'dayjs';

// Add a new document with a generated id.

export const postDiary = async (uid = '', body = '', rate = 1) => {
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const docRef = await addDoc(collection(db, 'diaries'), {
    uid: uid,
    rate: rate,
    body: body,
    image: '',
    createAt: dayjs().format('YYYY/MM/DD HH:mm:ss'),
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef.id ? truee : false;
};
