import React from 'react';
import './Contact.css';

export default function ContactView() {
  return (
    <>
      <div className='container-fluid'>
        <div id='contact-container' className='row justify-content-center'>
          <div id='contact-form' className='col-6'>
            <div className='row'>
              <div className='col-12'>
                <h2
                  id='contact-header'
                  className='section-headers cus-txt-white'
                >
                  Contact
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 mt-5 text-center'>
                <p id='contact-p' className='cus-txt-darkgrey'>
                  If you would like to get in touch, please send in the
                  information below.
                </p>
              </div>
            </div>
            <div className='col-12 d-flex justify-content-evenly'>
              <div className='col-5 d-block'>
                <div className='row'>
                  <div className='col-12 d-block'>
                    <label className='clear-bg' htmlFor='nameInput'></label>
                    <div className='row'>
                      <input
                        className='contact-input'
                        type='text'
                        name='nameInput'
                        id='nameInput'
                        placeholder='name'
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 d-block justify-content-center'>
                    <label className='clear-bg' htmlFor='emailInput'></label>
                    <div className='row'>
                      <input
                        className='contact-input'
                        type='email'
                        name='emailInput'
                        id='emailInput'
                        placeholder='email'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-5 d-flex'>
                <div className='col-12 d-block'>
                  <label className='clear-bg' htmlFor='messageInput'></label>
                  <div className='row'>
                    <textarea
                      className='contact-input'
                      type='text'
                      name='messageInput'
                      id='messageInput'
                      placeholder='Your message'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4'>
                <button id='form-submit' type='submit'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
