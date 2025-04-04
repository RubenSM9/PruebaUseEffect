"use client"; // Asegura que este componente se ejecute en el cliente

import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1337/articulos');
        setArticles(response.data); // Asumimos que la respuesta es un array de artículos
      } catch (error) {
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>
            <h2>{article.Titulo}</h2> {/* Cambiado a Titulo */}
            <p>{article.Contenido}</p> {/* Cambiado a Contenido */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
