import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";

import styles from "./DetailedCard.module.scss";
import { firestore } from "../../firebase-config";
import { jobIdActions } from "../../store/reducers/jobId-slice";
import Modal from "../Modal/Modal";

const DetailedCard = () => {
  const [detailedCard, setDetailedCard] = useState([]);

  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const jobId = useSelector((state) => state.jobId.jobId);
  const markedJobs = useSelector((state) => state.jobId.markedJobs);
  const dispatch = useDispatch();
  const jobsCollectionRef = collection(firestore, "jobs");

  const addJob = () => {
    dispatch(jobIdActions.addJob(jobId));
  };

  const removeJob = () => {
    dispatch(jobIdActions.removeJob(jobId));
  };

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef);
      setDetailedCard(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJobs();
  }, []);

  return (
    <>
      {detailedCard.map((job) => {
        return job.id === jobId ? (
          <div className={styles.detailedCard} key={job.id}>
            <div className={styles.title}>
              <h1 className={styles.vacancy}>{job.jobTitle}</h1>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.location}>{job.location}</p>
              <p className={styles.salary}>{job.salary}</p>
              {isAuth ? (
                <div className={styles.buttons}>
                  {markedJobs.includes(job.id) ? (
                    <button className={styles.removeBtn} onClick={removeJob}>
                      <AiFillHeart />
                    </button>
                  ) : (
                    <button className={styles.addBtn} onClick={addJob}>
                      <AiOutlineHeart />
                    </button>
                  )}
                </div>
              ) : null}
            </div>
            <div className={styles.description}>
              <h2 className={styles.descriptionTitle}>Full description</h2>
              <div className={styles.type}>
                <p className={styles.typeDescription}>{job.jobType}</p>
              </div>
              <div className={styles.otherDescription}>{job.description}</div>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};

export default DetailedCard;
