import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./UserCvPage.module.scss";
import Layout from "../../components/Layout/Layout";
import { firestore } from "../../firebase-config";
import AddedResume from "../../components/AddedResume/AddedResume";

const UserCvPage = () => {
  const [isPosted, setIsPosted] = useState(false);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [contact, setContact] = useState("");
  const [contactsList, setContactsList] = useState([]);
  const [description, setDescription] = useState("");
  const [a, setA] = useState(false);

  const userName = useSelector((state) => state.auth.userName);
  const addContact = () => {
    if (contact !== "" && !contactsList.includes(contact)) {
      setContactsList((arr) => [...arr, contact]);
      setContact("");
    }
  };

  const addSkill = () => {
    if (skill !== "" && !skillsList.includes(skill)) {
      setSkillsList((arr) => [...arr, skill]);
      setSkill("");
    }
  };

  async function addResume() {
    if (name && position && contactsList !== "") {
      try {
        const job = await addDoc(collection(firestore, "resumes"), {
          name,
          position,
          skillsList,
          contactsList,
          description,
          userName,
        });
        console.log("Doccument written with ID:", job.id);
        setIsPosted(true);
      } catch (e) {
        console.error("error edding document", e);
      }
    }
  }

  return (
    <Layout>
      <AddedResume/>
      <div className={styles.wrapper}>
        {isPosted ? (
          <div className={styles.success}>
            <BsFillCheckCircleFill className={styles.icon} /> Your resume has
            been successfully posted
            <Link to='/' className={styles.navBtn}>
              Jobs list
            </Link>
          </div>
        ) : (
          <>
            <h1 className={styles.title}>My CV</h1>
            {a ? (
              <h1 className={styles.emptyForm}>No resume yet</h1>
            ) : (
              <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type='text'
                  placeholder='Name*'
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className={styles.addWrapper}>
                  <input
                    type='text'
                    placeholder='Contacts*'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <button onClick={addContact} className={styles.addBtn}>
                    Add
                  </button>
                </div>
                <ul>
                  {contactsList.map((contact) => {
                    return (
                      <li key={Date.now() + Math.random()}>
                        {contact}
                        <AiOutlineClose
                          className={styles.removeBtn}
                          onClick={() => {
                            setContactsList(
                              contactsList.filter((item) => item !== contact)
                            );
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
                <input
                  type='text'
                  placeholder='Position*'
                  required
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                />
                <div className={styles.addWrapper}>
                  <input
                    type='text'
                    value={skill}
                    placeholder='Skills'
                    onChange={(e) => setSkill(e.target.value)}
                  />
                  <button onClick={addSkill} className={styles.addBtn}>
                    Add
                  </button>
                </div>
                <ul>
                  {skillsList.map((skill) => {
                    return (
                      <li key={Date.now() + Math.random()}>
                        {skill}
                        <AiOutlineClose
                          className={styles.removeBtn}
                          onClick={() => {
                            setSkillsList(
                              skillsList.filter((item) => item !== skill)
                            );
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
                <textarea
                  name='description'
                  placeholder='Description'
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
                <button className={styles.postBtn} onClick={addResume}>
                  Post
                </button>
              </form>
            )}
            <button className={styles.btn} onClick={() => setA(!a)}>
              {a ? "Create a resume" : "Cancel"}
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default UserCvPage;
