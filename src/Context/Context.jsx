import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import Cookies from "js-cookie";
import { getStudentData } from "../Services/auth";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext);

const GlobalStates = ({ children }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const [lloading, setlLoading] = useState(false);
  const [isuser, setIsUser] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");
  const [courseId, setCourseId] = useState("");
  const [viewdetail, setViewdetail] = useState([]);
  const [stuName, setStuName] = useState("");
  const [stuEmail, setStuEmail] = useState("");
  const [stuPhone, setStuPhone] = useState("");
  const [buyCourseData, setBuyCourseData] = useState([]);
  const [buyAllCourse, setBuyAllCourse] = useState([]);
  const [transactionImageURL, setTransactionImageURL] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedMoreCourses, setSelectedMoreCourses] = useState([]);
  const [totallFee, setTotallFee] = useState("");
  const [buyCBuyourseId, setBuyCourseId] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [verified, setVerified] = useState(false);
  const [phyFormData, setPhysFormData] = useState([]);
  const [buyCourseTitle, setBuyCourseTitle] = useState("");
  const [showBuyCourseTitle, setShowBuyCourseTitle] = useState("");
  const [updateState, setUpdateState] = useState(false);
  const [qualification, setQualification] = useState([]);
  const [qualifications, setQualifications] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [futurePlan, setFuturePlan] = useState("");
  const [hasComputer, setHasComputer] = useState("");
  const [errors, setErrors] = useState({});
  const [abc, setAbc] = useState([]);
  const [faqsSearch, setFaqsSearch] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseName, setCourseName] = useState("");
  const [position, setPosition] = useState("");
  const [newQualification, setNewQualification] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [testReportImage, setTestReportImage] = useState("");
  const [communityImageFile, setCommunityImageFile] = useState("");
  const [communityCommit, setCommunityCommit] = useState("");
  const [userDat, setUserData] = useState([]);
  const [imageData, setImageData] = useState([]);
    // const [errors, setErrors] = useState({});
  
  const token = Cookies.get("authToken");
  const id = Cookies.get("userId");


  // Memoize the getStudentsdata function to avoid unnecessary re-creations
  const getStudentsdata = useCallback(async () => {
    try {
      if (token) {
        const response = await getStudentData(id, token);
        const data = response.data.data[0];
        setQualification(data);
        setUserProfileImage(data.profileImage);
        setBuyAllCourse(data.courses);
        setStuName(data.name);
        setStuPhone(data.phone);
        setStuEmail(data.email);
        setUserData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [token, id]);  
  useEffect(() => {
    if (!token) {
      setIsUser(false);
      return; 
    }

    setUserToken(token);
    setUserId(id);
    getStudentsdata();
  }, [token, id, updateState, getStudentsdata]); 
  const memoizedState = useMemo(() => ({
    isuser,
    userId,
    userToken,
    stuName,
    stuEmail,
    stuPhone,
    userProfileImage,
    qualification,
    buyAllCourse,
    courseData,
    courseId,
    viewdetail,
    lloading,
    buyCourseData,
    transactionImageURL,
    selectedCourses,
    selectedMoreCourses,
    totallFee,
    buyCBuyourseId,
    verified,
    phyFormData,
    buyCourseTitle,
    showBuyCourseTitle,
    qualifications,
    specialization,
    currentStatus,
    futurePlan,
    hasComputer,
    errors,
    abc,
    faqsSearch,
    fullName,
    email,
    phone,
    courseName,
    position,
    newQualification,
    cnic,
    city,
    testReportImage,
    communityImageFile,
    communityCommit,
    userDat,
    imageData,
    loginEmail,
    loginPass,
    formData,
    setCourseData,
    setLoginEmail,
    setLoginPass,
    setFormData,
    setFuturePlan,
    setHasComputer,
    setErrors,
    setAbc,
    setFaqsSearch,
    setFullName,
    setEmail,
    setPhone,
    setCourseName,
    setPosition,
    setNewQualification,
    setCnic,
    setCity,
    setTestReportImage,
    setlLoading,
    setBuyCourseData,
    setCommunityImageFile,
    setTransactionImageURL,
    setSelectedCourses,
    setCommunityCommit,
    setSelectedMoreCourses,
    setTotallFee,
    setUserData,
    setBuyCourseId,
    setVerified,
    setImageData,
    setPhysFormData,
    setBuyCourseTitle,
    setShowBuyCourseTitle,
    setQualifications,
    setSpecialization,
    setCurrentStatus,
    setCourseId,
    setViewdetail,
    setUpdateState,
  }), [isuser, userId, userToken, stuName, stuEmail, stuPhone, userProfileImage, qualification, buyAllCourse, courseData, courseId, viewdetail, lloading, buyCourseData, transactionImageURL, selectedCourses, selectedMoreCourses, totallFee, buyCBuyourseId, verified, phyFormData, buyCourseTitle, showBuyCourseTitle, qualifications, specialization, currentStatus, futurePlan, hasComputer, errors, abc, faqsSearch, fullName, email, phone, courseName, position, newQualification, cnic, city, testReportImage, communityImageFile, communityCommit, userDat, imageData, loginEmail, loginPass, formData,]);

  return (
    <GlobalContext.Provider value={memoizedState}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalStates, useGlobalState };
