import HttpRequest from '@/libs/http/axios';

const baseUrl = process.env.NODE_ENV === 'development' ? '' : '';
export default new HttpRequest(baseUrl);
