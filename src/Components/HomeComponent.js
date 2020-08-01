import React from 'react';
const date = new Intl.DateTimeFormat('en-US', {year: "numeric"}).format(new Date(Date.parse(2020)))

const Home = ()=>{

    return(
        <section>
        <section className="site-hero">
            <div className="container">
                <div className="row align-items-center justify-content-center ">
                  <div className="col-md-10 text-center pt-5">
                   
                   <h1>Hello, I'm  <br/> <strong className="d-block">Vaibhav Sinha</strong></h1>
                   <strong className="d-block text-white text-uppercase letter-spacing" style={{fontWeight:"300"}}>And this is my Portfolio</strong>

                   </div>
                </div>
            </div>
        </section>
        <footer className="site-footer">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-auto mb-3">
                        <p>Copyright &copy; {date} All rights reserved <br/> Designed by Vaibhav | Inspired by <a style={{color:"#ccc"}} href="https://colorlib.com">Colorlib</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 pb-4">
                            <div className="text-center">
                                <a className="px-2 media-icon" href=""><i className="fa fa-github fa-lg icon"></i></a>
                                <a className="px-2 media-icon" href=""><i className="fa fa-linkedin fa-lg icon"></i></a>
                                <a className="px-2 media-icon" href="http://google.com/+"><i className="fa fa-google fa-lg icon"></i></a>
                                <a className="px-2 media-icon" href=""><span className="iconify fa-lg icon" data-icon="simple-icons:hackerrank"></span></a>
                                <a className="px-2 media-icon" href=""><i className="fa fa-instagram fa-lg icon"></i></a>
                                <a className="px-2 media-icon" href=""><i className="fa fa-facebook fa-lg icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Home;