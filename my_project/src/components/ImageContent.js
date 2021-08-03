import React, { useState, useEffect } from "react";
export const ImageContent = ({file}) => {

    const [imageLinkState, setImageLinkState] = useState({
        loading: false,
        imageLink: undefined
    });

    const { loading, imageLink } = imageLinkState;

    useEffect(() => {
        setImageLinkState((imageLinkState) => ({ ...imageLinkState, loading: true }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageLinkState({ loading: false, imageLink: reader.result });
        };
        if (file && file.type.match("image.*")) {
            reader.readAsDataURL(file);
        }
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