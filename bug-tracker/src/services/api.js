import axios from 'axios';
import * as Sentry from "@sentry/react";

const api = axios.create({
  baseURL: '/api'
});

export const fetchBugs = async () => {
  try {
    const response = await api.get('/bugs');
    return response.data;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

export const createBug = async (bug) => {
  try {
    const response = await api.post('/bugs', bug);
    return response.data;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};