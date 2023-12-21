import './testimonial.css'
import img1 from '../images/1.png'
// import img2 from '../images/2.png'
// import img3 from '../images/3.png'
// import img4 from '../images/4.png'
// import img5 from '../images/5.png'
import rating from '../images/rating.png'

function Testimonial() {
    return (<>
        <div id="testimonial" className="testi-area bg-white ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">What Clients Says</span>
                            <h2 className="title">Testimonial</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="testi-activate testimonial-pb mb-30">
                            <div className="testimonial mt-50 mt_md-40 mt_sm-40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt-10">Client 1</span>
                                            <h3 className="title">Navnit Kumar</h3>
                                        </div>
                                    </div>

                                    <button class="slide-arrow prev-arrow text-white"><i class="uil uil-angle-left-b"></i>pre</button>
                                    <button class="slide-arrow next-arrow"><i class="uil uil-angle-right-b"></i></button>
                                    
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">Website Development</h3>
                                                <span className="date">Task done in 1 Month</span>
                                            </div>
                                            <div className="rating">
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga harum
                                            quasi aperiam quam cupiditate nihil aut, voluptates corporis provident? Impedit,
                                            cupiditate fugit sapiente doloremque eaque harum libero dolorem. Vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="testimonial mt-50 mt_md-40 mt_sm-40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt-10">Client 2</span>
                                            <h3 className="title">Nilay Hirpara</h3>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">App Development</h3>
                                                <span className="date">Task done in 2 Month</span>
                                            </div>
                                            <div className="rating">
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga harum
                                            quasi aperiam quam cupiditate nihil aut, voluptates corporis provident? Impedit,
                                            cupiditate fugit sapiente doloremque eaque harum libero dolorem. Vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial mt-50 mt_md-40 mt_sm-40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={img3} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt-10">Client 3</span>
                                            <h3 className="title">Ravi Kumawat</h3>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">App Development</h3>
                                                <span className="date">Task done in 2 Weeks</span>
                                            </div>
                                            <div className="rating">
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga harum
                                            quasi aperiam quam cupiditate nihil aut, voluptates corporis provident? Impedit,
                                            cupiditate fugit sapiente doloremque eaque harum libero dolorem. Vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial mt-50 mt_md-40 mt_sm-40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={img4} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt-10">Client 4</span>
                                            <h3 className="title">Pranav Badgal</h3>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">IOS App Development</h3>
                                                <span className="date">Task done in 3 Month</span>
                                            </div>
                                            <div className="rating">
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga harum
                                            quasi aperiam quam cupiditate nihil aut, voluptates corporis provident? Impedit,
                                            cupiditate fugit sapiente doloremque eaque harum libero dolorem. Vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial mt-50 mt_md-40 mt_sm-40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={img5} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt-10">Client 5</span>
                                            <h3 className="title">Priyotosh Dey</h3>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">Software Development</h3>
                                                <span className="date">Task done in 6 Month</span>
                                            </div>
                                            <div className="rating">
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                                <img src={rating} alt="" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga harum
                                            quasi aperiam quam cupiditate nihil aut, voluptates corporis provident? Impedit,
                                            cupiditate fugit sapiente doloremque eaque harum libero dolorem. Vitae!
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}

export default Testimonial;