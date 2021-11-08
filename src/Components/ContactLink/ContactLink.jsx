import React from 'react';

const ContactLink = (props) => {
    return (
        <>
            <a href={props.data.link}>
                <img
                    src={props.data.img}
                    alt={props.data.name}
                ></img>
            </a>
        </>
    );
};

export default ContactLink;