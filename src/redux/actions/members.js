import { UPDATE_MEMBER_LIST, UPDATE_AUTH_STATUS } from '../../config/actions';
import { db } from '../../firebase-config';
import { DB } from '../../config/constants';

import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { batch } from 'react-redux';

// import { async } from '@firebase/util';

const collectionRef = collection(db, DB);

export const getNewMemberList = () => async (dispatch, getState) => {
  try {
    const data = await getDocs(collectionRef);
    let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log('data list:', dataList);

    dataList.sort(function (a, b) {
      return new Date(a.chestNumber) - new Date(b.chestNumber);
    });

    const localAuth = JSON.parse(sessionStorage.getItem('auth'));
    const regMemberList = dataList.filter((data) => data.registerMobile === localAuth.mobile);

    dispatch(updateMemberList(regMemberList, regMemberList));
  } catch (error) {
    console.log('getEventList : error:', error);
  }
};

export const addMember = (obj) => async (dispatch, getState) => {
  console.log("registraton member =", obj)
  try {
    await addDoc(collectionRef, obj);
    dispatch(getNewMemberList());
  } catch (error) {
    console.log('error:', error);
  }
};

export const updateMemberList = (data, regPlayerList) => {
  return {
    type: UPDATE_MEMBER_LIST,
    data: data,
    regPlayerList: regPlayerList,
  };
};


export const setAuthStatus = (status) => {
  return {
    type: UPDATE_AUTH_STATUS,
    data: status,
  };
};
