import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import styles from "./UserPostJob.module.scss";
import Layout from "../../components/Layout/Layout";
import { firestore } from "../../firebase-config";

const UserPostJob = () => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");

  async function addJob() {
    try {
      const job = await addDoc(collection(firestore, "jobs"), {
        company,
        jobTitle,
        salary,
        location,
        contact,
        jobType,
        description,
      });
      console.log("Doccument written with ID:", job.id);
    } catch (e) {
      console.error("error edding document", e);
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Post a Job</h1>
        <form
          action='submit'
          className={styles.form}
          onSubmit={onSubmitHandler}
        >
          <input
            className={styles.company}
            type='text'
            required
            placeholder='Company*'
            onChange={(event) => setCompany(event.target.value)}
          />

          <div className={styles.jobSalary}>
            <input
              className={styles.job}
              type='text'
              required
              placeholder='Job title*'
              onChange={(event) => setJobTitle(event.target.value)}
            />
            <input
              className={styles.salary}
              type='text'
              placeholder='Salary'
              onChange={(event) => setSalary(event.target.value)}
            />
          </div>

          <input
            className={styles.location}
            type='text'
            placeholder='Location'
            onChange={(event) => setLocation(event.target.value)}
          />
          <input
            className={styles.contact}
            type='text'
            required
            placeholder='Contact*'
            onChange={(event) => setContact(event.target.value)}
          />

          <select
            className={styles.select}
            name='Job type'
            defaultValue='Full time'
            onChange={(event) => setJobType(event.target.value)}
          >
            <option value='Full time'>Full time</option>
            <option value='Part time'>Part time</option>
          </select>
          <textarea
            className={styles.description}
            name='Job description'
            placeholder='Job description'
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <button className={styles.btn} onClick={addJob}>
            Add a job
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserPostJob;
