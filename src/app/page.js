import Image from 'next/image';
import Link from 'next/link';
import AboutIcon from '../../public/assets/img/icon/about-icon.svg';
import LongArrow from '../../public/assets/img/icon/long-arrow.svg';
import LongArrow2 from '../../public/assets/img/icon/long-arrow-2.svg';
import Categorie1 from '../../public/assets/img/icon/catg-icon-1.svg';
import Categorie2 from '../../public/assets/img/icon/catg-icon-2.svg';
import Categorie3 from '../../public/assets/img/icon/catg-icon-3.svg';
import ShapeImg from '../../public/assets/img/all-img/shape-img.png';
import CounterImg from '../../public/assets/img/icon/counter-icon-1.svg';
import Blog1 from '../../public/assets/img/all-img/blog-1.png';
import Blog2 from '../../public/assets/img/all-img/blog-2.png';
import Blog3 from '../../public/assets/img/all-img/blog-3.png';
import BlogUser1 from '../../public/assets/img/all-img/blog-user-1.png';
import Footer1 from '@/components/Footer/Footer1';
import Subscribe from '@/components/Subscribe';
import HeroSlide from '@/components/HeroSlide';
import Testimonial from '@/components/Testimonial';
import LatestBlogCard from '@/components/card/LatestBlogCard';
import CourseFilters from '@/components/CourseFilters';
import HeaderNew1 from '@/components/Header/HeaderNew1';
import CoundownItem from '@/components/CoundownItem';


// const courses = [
//   {
//     "id": 1,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses1,
//     "authorImg": User1,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },
//   {
//     "id": 2,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses2,
//     "authorImg": User2,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },
//   {
//     "id": 3,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses3,
//     "authorImg": User3,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },
//   {
//     "id": 4,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses4,
//     "authorImg": User4,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },
//   {
//     "id": 5,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses5,
//     "authorImg": User5,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },
//   {
//     "id": 6,
//     "title": "Full web Designing Course with 42 web Template.",
//     "thumbnail": Courses6,
//     "useauthor": User6,
//     "price": `$100`,
//     "discountPrice": `$400`,
//     "courseName": "Engineering",
//     "name": "Eleanor Pena",
//     "rating": "(45)",
//     "lession": "(45) lesson",
//     "date": "10 Week",
//     "category": "design",
//   },


// ];



export default function Home() {
  return (
    <>
      {/* start the header component */}
      {/* <Header1 /> */}
      <HeaderNew1 />
      {/* end the header component */}

      {/* start the hero section */}
      <div className="hero-section hero-bg position-relative">
        <div className="container">
          <div className="main-max-width">
            <div className="hero-slider">
              <HeroSlide />
            </div>
          </div>
        </div>
      </div>
      {/* end the hero section */}

      {/* start the category section */}
      <div className="category-section pt-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row">
                <div className="col-lg-7 col-sm-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Browse Category</h4>
                    <h2 className="mb-0 fs-35">Top Courses Categories</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5">
                  <div className="section-btn text-end">
                    <Link href="/courses" className="btn style-one box-shadow-1">All Categories <Image src={LongArrow} alt="Image" /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie1} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Finance & Accounting</Link></h4>
                    <p className="m-0 fs-15">15 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie2} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Management</Link></h4>
                    <p className="m-0 fs-15">30 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie3} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Learn Art & Design</Link></h4>
                    <p className="m-0 fs-15">30 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie1} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Foreign Languages</Link></h4>
                    <p className="m-0 fs-15">15 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie1} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Marketing & sales</Link></h4>
                    <p className="m-0 fs-15">15 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <Image src={Categorie1} alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16"><Link href="/course-grid">Lifestyle & Fashion</Link></h4>
                    <p className="m-0 fs-15">15 Courses <Image src={LongArrow2} alt="Image" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the category section */}

      {/* start the about section */}
      <div className="about-section pb-100 pt-100 " >
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h4 className="sub-title mb-25"># About Us</h4>
                  <h2 className="mb-50 fs-35">Why Will You Choose Our?</h2>
                  <p className="mb-30">Delve into Insocour guided by industry experts and seasoned professionals. Our carefully curated curriculum is Designed to impart not just theoretical knowledge but practical insights gained from real-world experience.</p>
                  <p className="mb-30">Learn by doing. Our course emphasizes hands-on projects, case studies, and interactive sessions to ensure you can apply your newfound knowledge directly to real-world scenarios.</p>
                </div>
                <div className="about-meta d-flex align-items-center mt-40">
                  <div className="about-btn mr-20">
                    <Link href="/about" className="btn style-one box-shadow-1">About More<Image src={LongArrow} alt="Image" /></Link>
                  </div>
                  <div className="info">
                    <div className="d-flex align-items-center">
                      <h5 className="count">16</h5>
                      <h5>+</h5>
                    </div>
                    <h5>Years Of Experiences</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-wrapper">

                  <div className="card about-card active" id="my-element1">
                    <h4 className="heading">Learn From The Experts</h4>
                    <div className="description">
                      <div className="icon"><Image src={AboutIcon} alt="icon" /></div>
                      <h4>Learn From The Experts</h4>
                      <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                      <Link className="btn" href="/about">Read More <Image src={LongArrow} alt="Image" /></Link>
                    </div>
                  </div>

                  <div className="card about-card" id="my-element2">
                    <h4 className="heading">Seven Easy Rules Of Education</h4>
                    <div className="description">
                      <div className="icon"><Image src={AboutIcon} alt="icon" /></div>
                      <h4>Seven Easy Rules Of Education</h4>
                      <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                      <Link className="btn" href="/about">Read More <Image src={LongArrow} alt="Image" /></Link>
                    </div>
                  </div>
                  <div className="card about-card" id="my-element3">
                    <h4 className="heading">Explore our Beliefs</h4>
                    <div className="description">
                      <div className="icon"><Image src={AboutIcon} alt="icon" /></div>
                      <h4>Explore our Beliefs</h4>
                      <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                      <Link className="btn" href="/about">Read More <Image src={LongArrow} alt="Image" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the about section */}

      {/* start the our courses list */}
      <CourseFilters />
      {/* end the our courses list */}

      {/* start the testimonials section */}
      <Testimonial />
      {/* end the testimonials section */}

      {/* start the contributor section */}
      <div className="contributor-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="contributor-content position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>Free Online Courses From School To Education</h3>
                  <p>Free online courses have significantly transformed the landscape of education,</p>
                  <Link href="/instructor" className="btn style-one box-shadow-1">Become A Instructor <Image src={LongArrow} alt="Image" /></Link>
                  <div className="shape"></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contributor-content style-two position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>Online Courses From History.</h3>
                  <p>Free online courses have significantly <br /> transformed the landscape of education,</p>
                  <Link href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr" className="btn style-one popup-youtube paly box-shadow-1"><i className="ri-play-fill"></i></Link>
                  <div className="shape-image">
                    <Image src={ShapeImg} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the contributor section */}


      {/* start the video section */}
      <div className="video-section">
        <div className="container">
          <div className="main-max-width">
            <div className="play">
              <Link className="btn style-one popup-youtube" target="_blank" href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"><i className="ri-play-fill"></i> Watch Our Video</Link>
            </div>
          </div>
        </div>
      </div>
      {/* end the video section */}


      {/* start the score area section */}
      {/* <div className="score-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-yl-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">15525</div>
                    <p>Happy Student</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-rd-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">586</div>
                    <p>Good Comment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-gr-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">35200</div>
                    <p>Services Download</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-pr-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">55</div>
                    <p>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CoundownItem />
      {/* end the score area section */}


      {/* start the blog section */}
      <div className="blog-section pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row">
                <div className="col-lg-7 col-sm-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Blog</h4>
                    <h2 className="mb-0 fs-35">Latest News & Articles</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5">
                  <div className="section-btn text-end">
                    <Link href="/blog" className="btn style-one box-shadow-1">View All <Image src={LongArrow} alt="Image" /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <LatestBlogCard blogImg={Blog1} author={BlogUser1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestBlogCard blogImg={Blog2} author={BlogUser1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestBlogCard blogImg={Blog3} author={BlogUser1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the blog section */}


      {/* start the subscription section */}
      <Subscribe />
      {/* end the subscription section */}


      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
}
