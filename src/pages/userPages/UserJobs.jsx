import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./UserJobs.module.scss";
import Layout from "../../components/Layout/Layout";
import { firestore } from "../../firebase-config";
import { jobIdActions } from "../../store/reducers/jobId-slice";

const UserJobs = () => {
  const [userJobs, setUserJobs] = useState([]);

  const userName = useSelector((state) => state.auth.userName).split("@");
  const followedJobs = useSelector((state) => state.jobId.markedJobs);

  const dispatch = useDispatch();

  const jobsCollectionRef = collection(firestore, "jobs");

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef);
      setUserJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJobs();
  }, []);

  return (
    <>
      <Layout>
        <section className={styles.section}>
          <h1 className={styles.title}>{userName[0]}'s favorite jobs</h1>
          <div className={styles.wrapper}>
            {userJobs.map((job) => {
              return job.id === followedJobs.find((e) => e === job.id) ? (
                <div className={styles.cardWrapper} key={job.id}>
                  <AiOutlineCloseCircle
                    className={styles.btn}
                    onClick={() => {
                      dispatch(jobIdActions.removeJob(job.id));
                    }}
                  />
                  <h2 className={styles.jobTitle}>{job.jobTitle}</h2>
                  <p className={styles.salary}>{job.salary}</p>
                  <div className={styles.subtitle}>
                    <div className={styles.company}>{job.company}</div>
                    <div className={styles.location}>{job.location}</div>
                  </div>
                  <div className={styles.description}>{job.description}</div>
                </div>
              ) : null;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default UserJobs;
