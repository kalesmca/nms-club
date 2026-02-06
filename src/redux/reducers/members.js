import { UPDATE_MEMBER, UPDATE_AUTH_STATUS } from '../../config/actions';
import { AUTH_STATUS } from '../../config/constants';

const initState = {
  memberList: [],
  authStatus: AUTH_STATUS.PENDING,
  regMemberList:[]
};

const members = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MEMBER: {
      return { ...state, memberList: action.data, regMemberList: action.regMemberList };
    }
    case UPDATE_AUTH_STATUS: {
      return { ...state, authStatus: action.data };
    }

    default: {
      return { ...state };
    }
  }
};

export default members;
