/* eslint-disable react/jsx-key */
import TraitCard from './traitCard';
import React from 'react';

const Modal = (props: { data: any }) => {
    const { data } = props;
    return (
        <div>
            <label htmlFor="my-modal-2" className="btn btn-secondary btn-outline modal-button">
                Traits
            </label>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="container flex flex-wrap justify-around items-stretch ">
                        {data.map((prop: any) => {
                            return <TraitCard trait={prop.value} name={prop.trait_type} />;
                        })}
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-2" className="btn btn-primary">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
