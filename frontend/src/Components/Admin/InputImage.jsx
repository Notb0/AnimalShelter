import React, { useState } from "react";
import styled from "styled-components";

const InputCustom = styled.input`
    background-color: transparent;
    color: black;  
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        background-color: var(--gray-element); 
    }
    &:focus-visible{
        outline: null;
    }
    width: 20%;
    border: none;
`

function InputImage({name, type, accept, onChange, Img, alt, src}) {
    const [NowImg, SetNowImg] = useState();

    const HandleChange = (Input) => {
        let NewImg = Img? Img : null;
        const imgInput = {
            preview: URL.createObjectURL(Input.target.files[0]),
            data: Input.target.files[0],
        }
        NewImg = imgInput;
        onChange(NewImg);
        SetNowImg(imgInput);
    }
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            {NowImg && <img src={NowImg?.preview? NowImg.preview : `${src}`} alt="" width={"15%"} height={"15%"}/>}
            <InputCustom name={name} type={type} accept={accept} src={src} onChange={e => HandleChange(e)} alt={alt}/>
        </div>
    )
}

export default InputImage 