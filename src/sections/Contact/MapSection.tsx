import React from "react";

const MapSection = () => {
  return (
    <div className="cont-y container-p">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.531133919221!2d71.67884987494273!3d40.99174662044432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4f742677291f%3A0x29efd5d1aec83359!2sCaramella!5e0!3m2!1sen!2s!4v1703687321955!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
