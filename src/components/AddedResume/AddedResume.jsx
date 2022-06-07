import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import styles from "../../pages/emploeesPage/EmployeesPage.module.scss";
import { firestore } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../../store/reducers/resume-slice";
import Modal from "../Modal/Modal";
import Layout from "../Layout/Layout";
import PostedSuccess from "../PostedSuccess/PostedSuccess";

const AddedResume = () => {
  const [resumes, setResumes] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  const resumeCollectionRef = collection(firestore, "resumes");

  const deleteResume = async (id) => {
    await deleteDoc(doc(firestore, "resumes", `${id}`));
    dispatch(resumeActions.resumeRemoved());
    setIsActive(false);
    setIsRemoved(true);
    console.log(`deleted ${id}`);
  };

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
        {resumes.map((resume) =>
          resume.userName === userName ? (
            <>
              {isRemoved ? (
                <PostedSuccess
                  text='Your resume has been successfully deleted'
                  linkName='CVs list'
                  link='/employees'
                />
              ) : (
                <div className={styles.wrapper} key={resume.id}>
                  <AiOutlineCloseCircle
                    className={styles.removeBtn}
                    onClick={() => {
                      setIsActive(true);
                    }}
                  />
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
              )}
              <Modal
                active={isActive}
                setActive={() => {
                  setIsActive(false);
                }}
              >
                <div className={styles.modal}>
                  Are you sure you want to delete your resume?
                  <div className={styles.buttons}>
                    <button
                      onClick={() => {
                        deleteResume(resume.id);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setIsActive(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          ) : null
        )}
      </Layout>
    </>
  );
};

export default AddedResume;
