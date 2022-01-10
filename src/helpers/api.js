import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import {db} from './firebase';
import dayjs from 'dayjs';

export const fetch = async uid => {
  const q = query(
    collection(db, 'diaries'),
    where('uid', '==', uid),
    orderBy('createdAt', 'desc'),
  );

  const querySnapshot = await getDocs(q);
  let diaries = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    diaries.push({
      id: doc.id,
      body: doc.data().body,
      rate: doc.data().rate,
      image: doc.data().image,
      createAt: doc.data().createAt,
    });
  });
  return diaries;
};
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
