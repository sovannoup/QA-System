import axiosInstance from './axiosInstance';

const resource = 'user';

const UserAPI = {
  async login(body) {
    return await axiosInstance({
      method: 'post',
      url: `/login`,
      data: body,
    });
  },
  async getProfile() {
    return await axiosInstance({
      method: 'get',
      url: `${resource}/profile`,
    });
  },
  async signUp(body) {
    return await axiosInstance({
      method: 'post',
      url: `${resource}/signup`,
      data: body,
    });
  },
  async forgetPassword(body) {
    return await axiosInstance({
      method: 'post',
      url: `${resource}/reset`,
      data: body,
    });
  },
};

export default UserAPI;
