import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';

function ShowCoursesNavbarSidebar({ data }) {

    const [show, setShow] = useState(false);
    const { setBuyCourseId } = useGlobalState();
    const [coursesVideos, setBuyCourses] = useState([]);
    const [activeCourseId, setActiveCourseId] = useState("");

    useEffect(() => {
        if (data) {
            setActiveCourseId(data.coursename);
            setBuyCourses(data.coursevideos);
            setBuyCourseId(data.coursevideos[0]._id)
        }
    }, [data]);

    const handle = (id) => {
        setBuyCourseId(id);
        setActiveCourseId(id);
        handleClose();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <i className="fa-solid fa-bars-staggered fs-5"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <div className="">
                            <Link className='btn btn-light py-3 w-100 text-start mb-3 text-capitalize fw-semibold fs-5' to={'/dashboard'}>Go to back</Link>
                        </div>
                        <div className="">
                            <h5 className='mb-4'>{activeCourseId}</h5>
                        </div>
                        <div className="">
                            {
                                coursesVideos.map((data) => (
                                    <>
                                        <p className='py-1 px-4 fw-semibold text-capitalize' style={{fontSize:"19px"}}>{data.title}</p>
                                        {
                                            data.videos.map((items) => {
                                                return (
                                                    <>
                                                        < div className='py-1 px-3' key={items._id} >
                                                            <Link
                                                                className={`fw-semibold btn btn-success text-white w-100 py-3 text-dark text-decoration-none text-start text-capitalize`}
                                                                onClick={() => handle(items._id)}
                                                            >
                                                                {items.title}
                                                            </Link>
                                                        </div >
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                ))}
                        </div>
                    </>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}

export default ShowCoursesNavbarSidebar;