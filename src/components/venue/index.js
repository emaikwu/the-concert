import React from 'react'
import calender from '../../resources/images/icons/calendar.png';
import location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
  return (
    <div className="bck_black" name='venue'>
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div className="vn_icon"
                    style={{
                      background: `url(${calender}`
                    }}
                  ></div>
                  <div className="vn_title">
                    Event Date & Time
                  </div>
                  <div className="vn_desc">
                    31 December {new Date().getFullYear()} @9:00 PM
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={300}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div className="vn_icon"
                    style={{
                      background: `url(${location}`
                    }}
                  ></div>
                  <div className="vn_title">
                    Event Location
                </div>
                  <div className="vn_desc">
                    Viztonia Center, Ikoyi Lagos.
                </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default VenueInfo
