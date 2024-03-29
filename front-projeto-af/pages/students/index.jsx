import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { api } from "../../services/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

export default function Users() {
  const router = useRouter();

  const [entities, setEntities] = useState([]);

  const returnToListPage = () => {
    router.push("/");
  };

  const onAddClick = () => {
    router.push("/students/form");
  };

  const onEditClick = (studentId = "") => {
    router.push(`/students/form?id=${String(studentId)}`);
  };

  const onRemoveClick = async (courseId) => {
    try {
      await api.delete(`student/${courseId}`);
      fetchEntities();
    } catch (error) {
      console.error("Erro ao apagar as entidades:", error);
    }
  };

  const fetchEntities = async () => {
    try {
      const response = await api.get("student");
      console.log("buscou", response);
      setEntities(response?.data?.data || []);
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
        <title>Alunos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span
          onClick={returnToListPage}
          className="text-blue-500 hover:text-blue-700 flex items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Voltar
        </span>

        <h1 className={styles.title}>Lista de Alunos</h1>

        <button
          onClick={onAddClick}
          class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Adicionar um novo aluno
        </button>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {entities.map((entity) => (
            <div key={entity.id} className="bg-white rounded shadow p-4 ">
              <p className="font-semibold mb-2 w-64 truncate">
                ID: {entity.id}
              </p>
              <p className="mb-4 truncate w-64">Nome: {entity.name}</p>
              <div className="flex justify-end">
                <button className="mr-2 px-2 py-2 rounded bg-blue-500 text-white">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="h-3 cursor-pointer"
                    onClick={() => onEditClick(entity?.id)}
                  />
                </button>
                <button className="px-2 py-2 rounded bg-red-500 text-white">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="h-3 cursor-pointer"
                    onClick={() => onRemoveClick(entity?.id)}
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
