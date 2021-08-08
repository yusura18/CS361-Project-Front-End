import React, { useState } from 'react';
import ImageGrid from '../components/imageGrid';
import SearchData from '../components/searchData';

const UserImages = () => {

    const [imagesByEmail, setImagesByEmail] = useState([]);

    return (
        <div>
            <SearchData />
        </div>
    )
}

export default UserImages;
