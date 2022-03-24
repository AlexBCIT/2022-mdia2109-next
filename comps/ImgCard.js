import styled from 'styled-components';

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl};
`;

const DifSize = styled.h1`
font-size: 60px;
`;

export default function ImgCard({
    img="/frog.jpeg",
    name="this is a frog ribbit",
    bg="red",
    tcl="#FFF",
    children=null
}){

    return <RedCont cl={bg} text_cl={tcl}>
        {children}
        <img src={img}/>
        <DifSize>{name}</DifSize>
    </RedCont>
}

// slash goes str8 to public folder