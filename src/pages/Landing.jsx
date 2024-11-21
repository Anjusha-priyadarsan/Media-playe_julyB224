import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/Up2T.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.png'
import category from '../assets/category.png'
import history from '../assets/history.png'





function Landing() {
  return (
    <>
      {/* landing section */}
      <div className="container landingsection">
        <div className="row align-items-center my-5 ">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dicta iste totam quidem aliquam ullam odio molestias a itaque doloremque libero eligendi quod soluta sint voluptate autem, facilis rerum? Maxime.</p>
            <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img src={landingImage} alt="" />
          </div>

        </div>
      </div>

      {/* Featurs */}

      <div className="feature container my-5">

          <h1  className='text-center text-warning'>Features</h1>
        <div className="row mt-5">

          <div className="col-lg-4">
            {/* card  1*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Managing videos</Card.Title>
                <Card.Text>
                Users can Upload, view and remove the videod
                </Card.Text>
              
              </Card.Body>
            </Card>

          </div>

          <div className="col-lg-4">
            {/* card  2*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={category} />
              <Card.Body>
                <Card.Title>Categorize  videos</Card.Title>
                <Card.Text>
                Users can categorize the video by drag and drop features
                </Card.Text>
              
              </Card.Body>
            </Card>

          </div>

          <div className="col-lg-4">
            {/* card  3*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={history} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                Users can mange the watch history of all video
                </Card.Text>
              
              </Card.Body>
            </Card>

          </div>


        </div>

      </div>

      {/* landing footer */}

      <div className="container my-5 p-5 border border-white border-3 rounded">

        <div className="row">

          <div className="col-lg-6">
            <h3 className='text-warning'> Simple,Fast and Powerfull</h3>

            <div className='mt-5 text-white'>
              <p><span className='fs-5 fw-bold'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias quam dolores quos tempore reiciendis illo a, earum saepe eum rerum, adipisci</p>
              <p><span className='fs-5 fw-bold'>Manage videos:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias quam dolores quos tempore reiciendis illo a, earum saepe eum rerum, adipisci</p>
              <p><span className='fs-5 fw-bold'>Watch History:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias quam dolores quos tempore reiciendis illo a, earum saepe eum rerum, adipisci</p>
            </div>

          </div>
          <div className="col-lg-6 p-5">
          <iframe width="460" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=eO-RNzEAfGECJIQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>

    </>
  )
}

export default Landing