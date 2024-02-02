import axios from 'axios';

const moviewDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    page: 1,
    language: 'es-ES',
  },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2NjE5ZDBmNTFkODI0YWIwYzcyYWExZjIzY2M3MiIsInN1YiI6IjY1Yjg0YjRhZTlkYTY5MDE3YmYyY2IzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiLFIgDe2mv3jDTgoOiNljsTzsTCxjcriYWNhiGqTI8',
    Accept: 'application/json',
  },
});

export default moviewDB;
