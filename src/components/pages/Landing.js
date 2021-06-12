import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import logo from '../../assets/images/header/logo.png';

function Landing() {
  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    showLoader()
  },[loader])

  const showLoader = () => {
    setTimeout(() => {
      setLoader(false);
    },2000)
  }

  const toggleMenu = () => {
    setToggle((prev) => !prev)
  }

  if(loader) { 
    return <Fragment>
      <Loader /> 
    </Fragment> 
  }

  return (
    <div className='landing-page-multikart'>
      <header id='sticky' className='sticky'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col p-0'>
								<div className='top-header'>
									<div className='logo pl-2'>
										<a className='navbar-brand' href='#'>
											<img
												src={logo}
												alt='logo'
											/>
										</a>
									</div>
									<div className='main-menu mx-auto' id='nav'>
										<nav id='navbar-example2' className='navbar navbar-expand-lg navbar-light'>
											<button
												className='navbar-toggler'
												type='button'
												data-toggle='collapse'
												data-target='#scroll-spy'
												aria-controls='scroll-spy'
												aria-expanded='false'
												aria-label='Toggle navigation'
												onClick={() => toggleMenu()}>
												<span className='navbar-toggler-icon' />
											</button>
											<div
												className={`collapse navbar-collapse ${toggle ? 'show' : ''}`}
												id='scroll-spy'>
												<ul className='navbar-nav mx-auto nav'>
													<li className='nav-item'>
														<Link className='nav-link' href='#img-bg'>
															Home
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#feature'>
															Features
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#demo'>
															Demo
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#admin'>
															Admin
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#email'>
															Email Templates
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#core'>
															Core Features
														</Link>
													</li>
													<li className='nav-item'>
														<Link className='nav-link' href='#footer'>
															Footer
														</Link>
													</li>
												</ul>
											</div>
										</nav>
									</div>
									<div>
										<form
											target='_blank'
											className='form-inline my-lg-0'
											action='https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773'>
											<button className='btn my-sm-0 purchase-btn'>PURCHASE</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>


    </div>
  )
}

export default Landing;