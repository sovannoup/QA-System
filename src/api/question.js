import axiosInstance from './axiosInstance';

const resource = 'question';

const QuestionAPI = {
  async createQuestion(body) {
    return await axiosInstance({
      method: 'post',
      url: `${resource}/question`,
      data: body,
    });
  },
  async getQuestion({ answer, popular, page }) {
    console.log(localStorage.getItem('token'));
    return await axiosInstance({
      method: 'get',
      url: `${resource}/questions?answer=${answer}&popular=${popular}&page=${page}`,
    });
  },
  async voteQuestion(body) {
    return await axiosInstance({
      method: 'post',
      url: `/vote`,
      data: body,
    });
  },
};

export default QuestionAPI;
