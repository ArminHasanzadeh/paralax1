import React from 'react';
import Haederb from './headerbottom/Haederb';
import Scrolimg from './scrolimg/Scrolimg';
import Master from './mastermain/Master';
import Scroltext from './scroltext/Scroltext';
import ScrolTextTrack from './ScrolTextTrack/ScrolTextTrack';
import Finalmain from './finalmain/Finalmain';


function Main(props) {
    return (
        <>
            <Haederb />
            <Scrolimg scrollTop={props.scrollTop} />
            <Master />
            <Scroltext scrollTop={props.scrollTop} /> 
            <ScrolTextTrack scrollTop={props.scrollTop} />
            <Finalmain />
        </>
    );
}

export default Main;
