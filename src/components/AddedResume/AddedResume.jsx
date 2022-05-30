import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs} from "firebase/firestore";

import styles from "../../pages/emploeesPage/EmployeesPage.module.scss";
import { firestore } from "../../firebase-config";
import { useSelector } from "react-redux";

const AddedResume = () => {
  const [resumes, setResumes] = useState([]);

  const userName = useSelector((state) => state.auth.userName);

  const resumeCollectionRef = collection(firestore, "resumes");
  
// const a = async (id) => {
//   const docSnap = await getDoc(docRef);
//     if (docSnap.exists(id)) {
//     console.log("Document data:", docSnap.data(userName));
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }






const deleteResume = async(id)=>{
  await deleteDoc(doc(firestore, "resumes", `${id}`));
  console.log(`deleted ${id}`);
}


  useEffect(() => {
    const getResumes = async () => {
      const data = await getDocs(resumeCollectionRef);
      setResumes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getResumes();
  }, []);



  return (
    <>
      {resumes.map((resume) =>
        resume.userName === userName ? (
          <div className={styles.wrapper} key={resume.id}>
            <h1 className={styles.name} >
              {resume.name}
            </h1>
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
        ) : null
      )}
    </>
  );
};

export default AddedResume;
