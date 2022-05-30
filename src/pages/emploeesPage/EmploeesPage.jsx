import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import styles from "./EmployeesPage.module.scss";
import { firestore } from "../../firebase-config";
import Layout from "../../components/Layout/Layout";

const EmploeesPage = () => {
  const [resumes, setResumes] = useState([]);
  const resumeCollectionRef = collection(firestore, "resumes");

  useEffect(() => {
    const getResumes = async () => {
      const data = await getDocs(resumeCollectionRef);
      setResumes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getResumes();
  }, []);

  return (
    <>
      <Layout>
        {resumes.map((resume) => {
          return (
            <div className={styles.wrapper} key={resume.id}>
              <h1 className={styles.name}>{resume.name}</h1>
              <h2 className={styles.position}>{resume.position}</h2>
              <ul className={styles.skills}>
                {resume.skillsList.map((skill) => (
                  <li key={Date.now() + Math.random()}>{skill}</li>
                ))}
              </ul>
              <div className={styles.description}>{resume.description}</div>
              <ul className={styles.contacts}>
                {resume.contactsList.map((contact) => (
                  <li key={Date.now() + Math.random()}>{contact}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </Layout>
    </>
  );
};

export default EmploeesPage;
