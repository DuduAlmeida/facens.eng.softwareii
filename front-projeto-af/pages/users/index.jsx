import Head from "next/head";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

export default function Users() {
  const [entities, setEntities] = useState([]);

  const fetchEntities = async () => {
    try {
      // const response = await fetch("URL_DA_API");
      // const data = await response.json();
      const data = [
        { name: "Dudu", id: 1 },
        { name: "fds", id: 2 },
        { name: "Dudvcxu", id: 3 },
        { name: "Duduxbvbnbfdsafdasfdasfdasfdsaf", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
        { name: "Duduxbvbnb", id: 4 },
      ];
      setEntities(data);
    } catch (error) {
      console.error("Erro ao buscar as entidades:", error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lista de usuários</h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {entities.map((entity) => (
            <div key={entity.id} className="bg-white rounded shadow p-4 ">
              <p className="font-semibold mb-2 w-64 truncate">
                ID: {entity.id}
              </p>
              <p className="mb-4 truncate w-64">Nome: {entity.name}</p>
              <div className="flex justify-end">
                <button className="mr-2 px-2 py-2 rounded bg-green-500 text-white">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="h-3 cursor-pointer"
                  />
                </button>
                <button className="mr-2 px-2 py-2 rounded bg-blue-500 text-white">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="h-3 cursor-pointer"
                  />
                </button>
                <button className="px-2 py-2 rounded bg-red-500 text-white">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="h-3 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Testemunhas de Turing @{new Date().getFullYear()}
      </footer>
    </div>
  );
}
