import Link from 'next/link';
import React from 'react';

import Shape1 from '../../public/assets/img/icon/shape-2.svg';
import Shape2 from '../../public/assets/img/icon/section-icon-1.svg';
import Shape3 from '../../public/assets/img/icon/section-icon-2.svg';
import Image from 'next/image';

const Breadcrumb = ({breadcrumb}) => {
    return (
        <section className="page-title-area ">
            <div className="container">
                <div className="main-max-width">
                    <div className="page-title-content">
                        <h2>{breadcrumb}</h2>
                        <ul className="page-breadcrumb align-items-center list-unstyle">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item"></li>
                            <li className="primery-link">{breadcrumb}</li>
                        </ul>
                        <div className="shape-1 moveHorizontal">
                            <Image src={Shape1} alt="image" />
                        </div>
                        <div className="shape-2">
                            <Image src={Shape2} alt="image" />
                        </div>
                        <div className="shape-3 bounce">
                            <Image src={Shape3} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <section className='breadCurmb'>
        //     <div className="container">
        //         <div className="breadCurmbwrp">
        //             <div className="breadCurmb-left">
        //                 <h2 className='breadCurmbTitle'>{breadcrumb}</h2>
        //             </div>
        //             <div className="breadCurmb-right"></div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Breadcrumb;