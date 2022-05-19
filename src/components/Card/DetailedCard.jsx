import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";

import styles from "./DetailedCard.module.scss";
import { firestore } from "../../firebase-config";
import { jobIdActions } from "../../store/reducers/jobId-slice";

const DetailedCard = () => {
  const [detailedCard, setDetailedCard] = useState([]);

  const jobId = useSelector((state) => state.jobId.jobId);
  const jobsCollectionRef = collection(firestore, "jobs");


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
              <h1 className={styles.vacancy} >{job.jobTitle}</h1>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.location}>{job.location}</p>
              <p className={styles.salary}>{job.salary}</p>
              <div className={styles.buttons}>
                <button className={styles.applyBtn}>Apply now</button>
                <button className={styles.followBtn}>
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            <div className={styles.description}>
              <h2 className={styles.descriptionTitle}>Full description</h2>
              <div className={styles.type}>
                <p className={styles.typeTitle}>Job Type</p>
                <p className={styles.typeDescription}>{job.jobType}</p>
              </div>
              {/* <div className={styles.requirements}>
                <p className={styles.requirementsTitle}>requirements</p>
                <p className={styles.requirementsDescription}>
                  Warehouse: 2 years (Required) Forklift: 1 year (Required)
                  Inventory control: 2 years (Required) US work authorization
                  (Required) High school or equivalent (Preferred)
                </p>
              </div>
              <div className={styles.responsibilities}>
                <p className={styles.responsibilitiesTitle}>responsibilities</p>
                <p className={styles.responsibilitiesDescription}>
                  General shop duties Assisting assembly personnel Maintenance
                  and upkeep of shop and safe work areas Perform routine and
                  repetitive activities on equipment and machinery. Perform
                  minor maintenance on equipment and machines such as cleaning,
                  adjusting and lubricating. Ensure proper paperwork accompanies
                  all parts you work on Identify and separate non-conforming
                  parts, scrap parts, and acceptable parts with notations on
                  paperwork
                </p>
              </div> */}
              <div className={styles.otherDescription}>
                {job.description}
              </div>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};

export default DetailedCard;
