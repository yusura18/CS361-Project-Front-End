import React, { useState, useEffect } from "react";

export async function convertImageToBase64(file) {
    const reader = new FileReader();
    let myResolver;
    const promiseResult = new Promise((resolver) => myResolver = resolver);
    reader.onloadend = () => {
        console.log("@@Result", reader.result);
        myResolver(reader.result);
    };
    if (file && file.type.match("image.*")) {
        reader.readAsDataURL(file);
    }

    const data = await promiseResult;
    console.log("@@Data", data);
    return data;
}

export const ImageContent = ({file}) => {

    const [imageLinkState, setImageLinkState] = useState({
        loading: false,
        imageLink: undefined
    });

    const { loading, imageLink } = imageLinkState;

    useEffect(() => {
        async function fetchData() {
            const result = await convertImageToBase64(file);
            setImageLinkState({ loading: false, imageLink: result });
        }
        setImageLinkState((imageLinkState) => ({ ...imageLinkState, loading: true }));
        fetchData();
        
    }, [file]);

    if (!file) {
        return null;
    }

    return (
        <img
            src={imageLink}
            alt={file.name}
            className="img_thumbnail"
            height={200}
            width={200}
        />
    );
}