import React from 'react';
import Image from "next/image";
import LoadingImg from '../../public/assets/img/logo/loading.webp';
const loading = () => {
    return (
        <div className='loadingImg'>
            <Image src={LoadingImg} alt="loading image" />
        </div>
    );
};

export default loading;