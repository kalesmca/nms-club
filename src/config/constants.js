export const DB = "testing";

export const AUTH_STATUS = {
  PENDING: 'PENDING',
  NOT_REGISTERED: 'NOT_REGISTERED',
  REGISTERED: 'REGISTERED',
  ADMIN_ACCESS: 'ADMIN_ACCESS',
  SUPER_ADMIN_ACCESS: 'SUPER_ADMIN_ACCESS',
  NMS_MEMBER:"NMS_MEMBER"
};

export const BLOOD_GROUP_LIST = ["NOT_MENTIONED","A+ve","A-ve","AB+ve", "AB-ve", "B+ve", "B-ve", "O+ve", "O-ve"];

export const memberInitState = {
    name : "", pwd :"", mobile:"", bloodgroup:BLOOD_GROUP_LIST[0], photoUrl:"",subscription:[]
}

