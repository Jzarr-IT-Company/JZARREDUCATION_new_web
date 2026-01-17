import React, { useEffect, useState } from 'react';
import "./form.css";
import { useGlobalState } from '../Context/Context';
import PhyForm from '../Component/PhyForm/PhyForm';
import PhysFormBttn from '../Component/PhysFormBttn/PhysFormBttn';

function PhysicalForm() {
    return (
        <div className="container d-flex py-5 justify-content-center align-items-center my-5">
            <div className="">
                {/* <h5 className="text-center"></h5> */}
                <PhyForm />
                <PhysFormBttn />
            </div>
        </div>
    );
}

export default PhysicalForm;
