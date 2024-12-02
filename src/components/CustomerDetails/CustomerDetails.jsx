// src/components/CustomerDetails.jsx
import React from "react";
import { MapPin, EllipsisVertical, CirclePlus, UserPlus } from "lucide-react";
import '../CustomerDetails/CustomerDetails.css'


const CustomerDetails = () => {
  return (
    <div className="customer-details">
      <div className="user-details">
        <div className="initial">CB</div>
        <div className="map">
          <h3>Hannibal Smith</h3>
          <p><MapPin size={16} /><span className="address">1 Market Street San Francisco, CA 94105</span></p>
        </div>
      </div>

      <div className="contact-details">
        <div className="id">
          <p>Customer ID </p>
          <p><strong>12345</strong> <EllipsisVertical size={16} color="#8A8EA6" /> </p>
        </div>
        <hr className="hr" />

        <div className="id">
          <p>Email </p>
          <p><strong>rachel@sample.com</strong> <EllipsisVertical size={16} color="#8A8EA6" /> </p>
        </div>
        <hr className="hr" />

        <div className="id">
          <p>Phone </p>
          <p><strong>805-129-8905</strong> <EllipsisVertical size={16} color="#8A8EA6"/> </p>
        </div>
        <div className="add-on">
            <span><CirclePlus size={25}  /></span>
            <span className="circle">Add</span>
        </div>
      </div>

      <div className="contact-details">
        <div className="id">
        <p>Loyalty Tier</p>
        <p><strong>Silver</strong><EllipsisVertical size={16} color="#8A8EA6"/></p>
        </div>
        <hr className="hr" />

        <div className="id">
        <p>Segment</p>
        <p> <strong>Sleepy Customer</strong><EllipsisVertical size={16} color="#8A8EA6"/></p>
        </div>
        <hr className="hr" />
        <div className="add-on">
            <span><CirclePlus size={25}  /></span>
            <span className="circle">Add</span>
        </div>
      </div>

      <div className="contact-details">
        <div className="id">
        <p>Lifetime Value</p>
        <p><strong>$1M</strong><EllipsisVertical size={16} color="#8A8EA6"/></p>
        </div>
        <hr className="hr" />

        <div className="id">
        <p>Propensity to Purchase</p>
        <p><strong>75%</strong><EllipsisVertical size={16} color="#8A8EA6"/></p>
        </div>
        <hr className="hr" />
        <div className="add-on">
            <span><CirclePlus size={25}  /></span>
            <span className="circle">Add</span>
        </div>
      </div>

      <div className="contact-details">
        <div className="id">
        <p>Engagement Score</p>
        <p> <strong>80%</strong><EllipsisVertical size={16} color="#8A8EA6"/></p>
        </div>
        <hr className="hr" />
        <div className="add-on">
            <span><CirclePlus size={25}  /></span>
            <span className="circle">Add</span>
        </div>
      </div>
      <button className="assign-btn"><UserPlus size={16} />  <span className="btn-text">Assign Other Agent</span></button>
      <button className="widget-btn">Add New Widget</button>
    </div>
  );
};

export default CustomerDetails;
