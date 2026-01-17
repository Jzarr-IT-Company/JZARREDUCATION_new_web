import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/logo.svg'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function CoursesreviewsCompo({courseId}) {
    const [show, setShow] = useState(false);
    const [value, setValue] = React.useState(5);
    const [hover, setHover] = React.useState(-1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [reviewingTitle, setReviewingTitle] = useState('')
    const [reviewing, setReviewing] = useState('')
    const [reviewingName, setReviewingName] = useState('')
    const [reviewingEmail, setReviewingEmail] = useState('')

    const id = Cookies.get('id');
    const submityReviews = async () => {
        if(!reviewingTitle){
            return message.error('please write review title')
        }
        if(!reviewing){
            return message.error('please write review')
        }
        if(!reviewingName){
            return message.error('please write name')
        }
        try {
            const response = await axios.post('https://main-server-zeta.vercel.app/savecoursesreviews', {
                rating: value, reviewtitle: reviewingTitle, reviews: reviewing, name: reviewingName, email: reviewingEmail,courses:courseId, userId: id
            })
            if (response.data.status === 200) {
                message.success("Thanks for give reviews")
                setReviewing('');
                setReviewingEmail('');
                setReviewingName('');
                setReviewingTitle('');
                handleClose()
            }
        } catch (error) {
            message.error("some thing went wrong")
            console.error("ERROR", error.message);
        }
    }

    return (
        <>
            <Button style={{ backgroundColor: "#00631a" }} onClick={handleShow}>
                Write Reviews
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src={logo} width={90} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="text-center">
                            <p className='fw-semibold'>Give me Rating</p>
                            <div className="d-flex justify-content-center align-item-center mb-3">
                                <Box className="text-center" sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                </Box>
                            </div>
                        </div>
                        <div className="">
                            <p>Review Title</p>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                                    value={reviewingTitle} onChange={(e) => { setReviewingTitle(e.target.value) }} />
                                <label for="floatingPassword">Reviews Title</label>
                            </div>
                        </div>
                        <div className="">
                            <p>Write Review</p>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                                    value={reviewing} onChange={(e) => { setReviewing(e.target.value) }} />
                                <label for="floatingPassword">Wrtie Review </label>
                            </div>
                        </div>
                        <div className="">
                            <p>Name</p>
                            <div class="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    value={reviewingName} onChange={(e) => { setReviewingName(e.target.value) }} />
                                <label for="floatingInput">Name</label>
                            </div>
                        </div>
                        <div className="">
                            <p>Email</p>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                                    value={reviewingEmail} onChange={(e) => { setReviewingEmail(e.target.value) }} />
                                <label for="floatingPassword">Email</label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "#00631a" }} onClick={submityReviews}>
                        Write Reviews
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoursesreviewsCompo