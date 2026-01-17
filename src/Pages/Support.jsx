import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import FaqsSearchbar from '../Component/FaqsSearchbar/FaqsSearchbar';
import { useGlobalState } from '../Context/Context';

function Support() {
  // const { faqsSearch } = useGlobalState();
  // const [faqs, setFaqs] = useState([]);

  // useEffect(() => {
  //     const getFAQS = async () => {
  //         try {
  //             const response = await axios.get('https://admin-portal-server.vercel.app/getFAQS');
  //             // Assuming the response is already sorted with newest first
  //             setFaqs(response.data.data);
  //         } catch (error) {
  //             console.log("ERROR FROM SUPPORT", error.message);
  //         }
  //     };
  //     getFAQS();
  // }, []);

  // // Function to add new FAQ to the state
  // const addNewFaq = (newFaq) => {
  //     setFaqs((prevFaqs) => [newFaq, ...prevFaqs]);  // Prepend the new FAQ to the beginning
  // };

  // // Filter FAQs based on the search input
  // const filteredFaqs = faqs.filter(faq => {
  //     if (!faqsSearch || faqsSearch.length === 0) return true;
  //     return faq.faqsquestions.includes(faqsSearch);
  // });

  return (
    // <div className="container py-5">
    //     <div className="mb-5 px-5">
    //         <h2 className="text-center mb-3">JZARR IT Education Support Team</h2>
    //         {/* Pass the addNewFaq function to FaqsSearchbar */}
    //         <FaqsSearchbar addNewFaq={addNewFaq} />
    //     </div>
    //     <Accordion defaultActiveKey="0">
    //         {filteredFaqs.map((faq, index) => (
    //             <Accordion.Item eventKey={index.toString()} key={index}>
    //                 <Accordion.Header>
    //                     {index + 1}. {faq.faqsquestions}
    //                 </Accordion.Header>
    //                 <Accordion.Body>
    //                     <p>{faq.faqsanswer}</p>
    //                     {faq.description?.subdescription && (
    //                         <ul style={{ listStyle: "none", padding: 0 }}>
    //                             {faq.description.subdescription.map((subdata, subindex) => (
    //                                 subdata.title ? (
    //                                     <li key={subindex} className="abc">{subdata.title}</li>
    //                                 ) : null
    //                             ))}
    //                         </ul>
    //                     )}
    //                 </Accordion.Body>
    //             </Accordion.Item>
    //         ))}
    //         <Accordion.Item eventKey={filteredFaqs.length.toString()}>
    //             <Accordion.Header>Who can I contact for more information?</Accordion.Header>
    //             <Accordion.Body>
    //                 <p>
    //                     For more information, you can contact our admissions team via: <br />
    //                     <strong>Email:</strong> contact@jzarr.com <br />
    //                     <strong>Phone:</strong> 0213 4595777 <br />
    //                     <strong>Visit us at:</strong> Main Rashid Minhas Road, Gulshan-e-Jamal Karachi.
    //                     <br />
    //                     Or fill out the contact form on our website. Feel free to reach out if you have any more questions or need further assistance!
    //                 </p>
    //             </Accordion.Body>
    //         </Accordion.Item>
    //     </Accordion>
    // </div>
    <>
      {/* <div className="container-fluid">
  <div className="row">
    <div className="col-12 border-dark" style={{ height: "83vh" }}>
      <iframe
        width="100%"
        height="100%"
        chat-title="jzarr_education"
        src="https://widget.kommunicate.io/chat?appId=368f578c1d141554bd4936c32a73f6371"
        allow="microphone; geolocation;"
      ></iframe>
    </div>
  </div>
</div> */}

    </>
  );
}

export default Support;
