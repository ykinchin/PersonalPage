import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";

import styles from "./ShortCard.module.scss";
import { firestore } from "../../firebase-config";
import { jobIdActions } from "../../store/reducers/jobId-slice";

const ShortCard = () => {
  const [jobs, setJobs] = useState([]);
  const jobsCollectionRef = collection(firestore, "jobs");
  const dispatch = useDispatch();

  const onSetIdHandler = (id) => {
    dispatch(jobIdActions.setJobId(id));
  };

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef);
      setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJobs();
  }, []);

  return (
    <>
      {jobs.map((job) => {
        return (
          <div
            className={styles.card}
            key={job.id}
            onClick={() => onSetIdHandler(job.id)}
          >
            <div className={styles.header}>
              <h1 className={styles.company}>{job.company}</h1>
              <h2 className={styles.vacancy}>{job.jobTitle}</h2>
              <h3 className={styles.location}>{job.location}</h3>
            </div>
            <div className={styles.description}>{job.description}</div>
            <div className={styles.salary}>
              {job.salary}
              {job.id}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShortCard;
